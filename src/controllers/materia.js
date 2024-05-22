
const materia = require('../models/materia');

// controllers/materiaController.js

exports.obtenerMaterias = async (req, res) => {
    try {
        res.status(200).json({ message: 'Materias obtenidas correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las materias', error });
    }
};

exports.obtenerMateriaEspecifico = async (req, res) => {
    try {
        res.status(200).json({ message: 'Materia obtenida correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la materia', error });
    }
};

exports.crearMateria = async (req, res) => {
    try {
        res.status(200).json({ message: 'Materia creada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la materia', error });
    }
};

exports.actualizarMateria = async (req, res) => {
    try {
        res.status(200).json({ message: 'Materia actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la materia', error });
    }
};

exports.eliminarMateria = async (req, res) => {
    try {
        res.status(200).json({ message: 'Materia eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la materia', error });
    }
};

exports.q5 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q5 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q5', error });
    }
};
