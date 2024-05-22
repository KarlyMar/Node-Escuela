const docente = require('../models/docente');

// controllers/docenteController.js

exports.obtenerDocentes = async (req, res) => {
    try {
        res.status(200).json({ message: 'Docentes obtenidos correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los docentes', error });
    }
};

exports.obtenerDocenteEspecifico = async (req, res) => {
    try {
        res.status(200).json({ message: 'Docente obtenido correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el docente', error });
    }
};

exports.crearDocente = async (req, res) => {
    try {
        res.status(200).json({ message: 'Docente creado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el docente', error });
    }
};

exports.actualizarDocente = async (req, res) => {
    try {
        res.status(200).json({ message: 'Docente actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el docente', error });
    }
};

exports.eliminarDocente = async (req, res) => {
    try {
        res.status(200).json({ message: 'Docente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el docente', error });
    }
};

exports.q4 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q1 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q1', error });
    }
};

exports.q9 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q2 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q2', error });
    }
};