const aula = require('../models/aula');
// controllers/aulaController.js

exports.obtenerAulas = async (req, res) => {
    try {
        const aulas = await aula.find();
        res.status(200).json({ aulas });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las aulas', detalle: error.message });
    }
};

exports.obtenerAulaEspecifico = async (req, res) => {
    const {id} = req.params;
    try {
        const aulas = await aula.findOne({id});
        if (!aula ) {
            return res.status(404).json({ message: 'No se encontró la Aula' });
        }
        res.status(200).json({ aulas });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el aula', detalle: error.message });
    }
};

exports.crearAula = async (req, res) => {
    const nuevaAula = new aula(req.body);
    try {
        const AulaSave = await nuevaAula.save();
        res.status(201).json({ AulaSave });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el aula', detalle: error.message });
    }
};

exports.actualizarAula = async (req, res) => {
    const {id} = req.params;
    try {
        const aulaActualizada = await aula.findOneAndUpdate({id}, req.body, {
            new: true
        });
        if (!aulaActualizada ) {
            return res.status(404).json({ message: 'No se encontró el aula' });
        }
        res.status(200).json(aulaActualizada);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el aula', detalle: error.message });
    }
};

exports.eliminarAula = async (req, res) => {
    const {id} = req.params;
    try {
        const aulaEliminada = await aula.findOneAndDelete({id});
        if (!aulaEliminada) {
            return res.status(404).json({ message: 'No se encontró el Aula' });
        }
        res.status(200).json({ message: 'Aula eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el aula', detalle: error.message });
    }
};
