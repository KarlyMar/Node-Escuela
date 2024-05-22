
const materia = require('../models/materia');

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
    const nuevamateria = new materia(req.body);
    try {
        const materiaSave = await nuevamateria.save();
        res.status(201).json({ materiaSave });
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
    try {
        res.status(200).json({ message: 'Operación q5 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q5', detalle: error.message });
    }
};
