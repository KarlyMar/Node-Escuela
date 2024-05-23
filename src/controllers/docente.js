const docente = require('../models/docente');

// controllers/docenteController.js

exports.obtenerDocentes = async (req, res) => {
    try {
        const docentes = await docente.find();
        res.status(200).json({ docentes });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los docentes', detalle: error.message });
    }
};

exports.obtenerDocenteEspecifico = async (req, res) => {
    const {rfc} = req.params;
    try {
        const docentes = await docente.findOne({rfc});
        if (!docente) {
            return res.status(404).json({ message: 'No se encontró la docente' });
        }
        res.status(200).json({ docentes });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el docente', detalle: error.message });
    }
};

exports.crearDocente = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            // Si es un arreglo, utilizar insertMany para insertar todos los docentes
            const docentesGuardados = await docente.insertMany(req.body);
            res.status(201).json({ docentes: docentesGuardados });
        } else {
            // Si no es un arreglo, guardar un solo docente
            const nuevoDocente = new docente(req.body);
            const docenteGuardado = await nuevoDocente.save();
            res.status(201).json({ docente: docenteGuardado });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el docente', detalle: error.message });
    }
};

exports.actualizarDocente = async (req, res) => {
    const {rfc} = req.params;
    try {
        const docenteActualizado = await docente.findOneAndUpdate({rfc}, req.body, {
            new: true
        });
        if (!docenteActualizado) {
            return res.status(404).json({ message: 'No se encontró el docente' });
        }
        res.status(200).json(docenteActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el docente', detalle: error.message });
    }
};

exports.eliminarDocente = async (req, res) => {
    const {rfc} = req.params;
    try {
        const docenteEliminado = await docente.findOneAndDelete({rfc});
        if (!docenteEliminado) {
            return res.status(404).json({ message: 'No se encontró el docente' });
        }
        res.status(200).json({ message: 'docente eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el docente', detalle: error.message });
    }
};


const Grupo = require('../models/grupo'); // Importa el modelo del grupo
exports.q9 = async (req, res) => {
    const {rfc}= req.params;
    try {
        // Realiza la consulta utilizando el método aggregate del modelo de grupo
        const resultado = await Grupo.aggregate([
            {
                $match: {
                    "docente.rfc": rfc, // Filtra por el RFC del docente específico
                },
            },
            {
                $group: {
                    _id: "$docente.rfc",
                    docente: { $first: "$docente" },
                    grupos: {
                        $push: {
                            horario: "$horario",
                            aula: "$aula",
                            materia: "$materia",
                            alumnos: "$alumnos",
                        },
                    },
                },
            },
        ]);

        // Envía la respuesta con el resultado de la consulta
        res.status(200).json(resultado);
    } catch (error) {
        // Maneja los errores
        res.status(500).json({ message: 'Error en la operación q9', detalle: error.message });
    }
};

exports.q4 = async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    try {
      const resultado = await docente.aggregate([
        { $unwind: "$materias_impartidas" },
        {
          $match: {
            "materias_impartidas.id": id
          }
        },
        {
          $group: {
            _id: "$materias_impartidas.id",
            materia: { $first: "$materias_impartidas" },
            docentes: { $push: "$datos" },
          },
        }
      ]);
      res.status(200).send(resultado);
    } catch (error) {
      res.status(500).send({ error: `Error al obtener los docentes que imparten la materia con ID: ${id}`, detalles: error.message });
    }
  };
