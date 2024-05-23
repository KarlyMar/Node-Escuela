
const materia = require('../models/materia');
const alumno = require('../models/alumno');

// controllers/materiaController.js

exports.obtenerMaterias = async (req, res) => {
    try {
        const materias = await materia.find();
        res.status(200).json({ materias });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las materias', detalle: error.message });
    }
};

exports.obtenerMateriaEspecifico = async (req, res) => {
    const {id} = req.params;
    try {
        const materias = await materia.findOne({id});
        if (!materia ) {
            return res.status(404).json({ message: 'No se encontró la materia' });
        }
        res.status(200).json({ materias });    
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la materia', detalle: error.message });
    }
};

exports.crearMateria = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const materiasGuardadas = await materia.insertMany(req.body);
            res.status(201).json({ materias: materiasGuardadas });
        } else {
            // Si no es un arreglo, guardar una sola materia
            const nuevaMateria = new materia(req.body);
            const materiaGuardada = await nuevaMateria.save();
            res.status(201).json({ materia: materiaGuardada });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la materia', detalle: error.message });
    }
};

exports.actualizarMateria = async (req, res) => {
    const {id} = req.params;
    try {
        const materiaActualizada = await materia.findOneAndUpdate({id}, req.body, {
            new: true
        });
        if (!materiaActualizada ) {
            return res.status(404).json({ message: 'No se encontró la materia' });
        }
        res.status(200).json(materiaActualizada); 
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la materia', detalle: error.message });
    }
};

exports.eliminarMateria = async (req, res) => {
    const {id} = req.params;
    try {
        const materiaEliminada = await materia.findOneAndDelete({id});
        if (!materiaEliminada ) {
            return res.status(404).json({ message: 'No se encontró la materia' });
        }
        res.status(200).json({ message: 'materia eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la materia', detalle: error.message });
    }
};

exports.q5 = async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    let { calificacion_minima } = req.params;
    calificacion_minima = parseInt(calificacion_minima);
    try {
      const resultado = await alumno.aggregate([
        {
          $project: {
            datos: 1,
            _id: 1,
            nctrl: 1,
            __v: 1,
            createdAt: 1,
            updatedAt: 1,
            'expediente_academico.grupos_cursados': {
              $filter: {
                input: '$expediente_academico.grupos_cursados',
                as: 'cursados',
                cond: { $gt: ['$$cursados.calificacion', calificacion_minima] }
              }
            }
          }
        },
        { $unwind: "$expediente_academico.grupos_cursados" },
        {
          $lookup: {
            from: "grupos",
            localField: "expediente_academico.grupos_cursados.grupo",
            foreignField: "id",
            as: "expediente_academico.grupos_cursados.grupo",
          },
        },
        { $unwind: "$expediente_academico.grupos_cursados.grupo" },
        {
          $match: {
            'expediente_academico.grupos_cursados.grupo.materia.id': id,
          }
        },
        {
          $group: {
            _id: "$expediente_academico.grupos_cursados.grupo.materia.id",
            materia: { $first: "$expediente_academico.grupos_cursados.grupo.materia" },
            alumnos: {
              $push: {
                alumno: "$datos",
                calificacion: "$expediente_academico.grupos_cursados.calificacion"
              }
            }
          }
        }
      ]);    
      res.status(200).send(resultado);
    } catch (error) {
      res.status(500).send({ error: `Error al obtener los alumnos con calificación superior a ${calificacion_minima} en la materia con ID: ${id}` });
    }
  };