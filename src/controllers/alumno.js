const alumno = require('../models/alumno');

exports.obtenerAlumnos = async (req, res) => {
    try {
        res.status(200).json({ message: 'Alumnos obtenidos correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos', error });
    }
};

exports.obtenerAlumnoEspecifico = async (req, res) => {
    try {
        res.status(200).json({ message: 'Alumno obtenido correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el alumno', error });
    }
};

exports.crearAlumno = async (req, res) => {
    try {
        res.status(200).json({ message: 'Alumno creado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el alumno', error });
    }
};

exports.actualizarAlumno = async (req, res) => {
    try {
        res.status(200).json({ message: 'Alumno actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el alumno', error });
    }
};

exports.eliminarAlumno = async (req, res) => {
    try {
        res.status(200).json({ message: 'Alumno eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el alumno', error });
    }
};

// controllers/alumnoController.js

exports.q1 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q1 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q1', error });
    }
};

exports.q2 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q2 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q2', error });
    }
};

exports.q3 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q3 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q3', error });
    }
};

exports.q7 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q7 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q7', error });
    }
};

exports.q8 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q8 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q8', error });
    }
};
