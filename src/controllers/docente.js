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
    const nuevodocente = new docente(req.body);
    try {
        const docentesave = await nuevodocente.save();
        res.status(201).json({ docentesave });
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

exports.q4 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q1 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q1', detalle: error.message });
    }
};

exports.q9 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q2 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q2', detalle: error.message });
    }
};