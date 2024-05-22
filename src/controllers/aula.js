const aula = require('../models/aula');
// controllers/aulaController.js

exports.obtenerAulas = async (req, res) => {
    try {
        res.status(200).json({ message: 'Aulas obtenidas correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las aulas', error });
    }
};

exports.obtenerAulaEspecifico = async (req, res) => {
    try {
        res.status(200).json({ message: 'Aula obtenida correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el aula', error });
    }
};

exports.crearAula = async (req, res) => {
    try {
        res.status(200).json({ message: 'Aula creada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el aula', error });
    }
};

exports.actualizarAula = async (req, res) => {
    try {
        res.status(200).json({ message: 'Aula actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el aula', error });
    }
};

exports.eliminarAula = async (req, res) => {
    try {
        res.status(200).json({ message: 'Aula eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el aula', error });
    }
};
