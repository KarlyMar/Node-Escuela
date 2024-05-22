const grupo = require('../models/grupo');

// controllers/grupoController.js

exports.obtenerGrupos = async (req, res) => {
    try {
        const grupos = await grupo.find();
        res.status(200).json({ grupos });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los grupos', detalle: error.message });
    }
};

exports.obtenerGrupoEspecifico = async (req, res) => {
    const {id} = req.params;
    try {
        const grupos = await grupo.findOne({id});
        if (!grupo) {
            return res.status(404).json({ message: 'No se encontró el grupo' });
        }
        res.status(200).json({ grupos });    
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el grupo', detalle: error.message });
    }
};

exports.crearGrupo = async (req, res) => {
    const nuevagrupo = new grupo(req.body);
    try {
        const grupoSave = await nuevagrupo.save();
        res.status(201).json({ grupoSave });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el grupo', detalle: error.message });
    }
};

exports.actualizarGrupo = async (req, res) => {
    const {id} = req.params;
    try {
        const grupoActualizado = await grupo.findOneAndUpdate({id}, req.body, {
            new: true
        });
        if (!grupoActualizado) {
            return res.status(404).json({ message: 'No se encontró el grupo' });
        }
        res.status(200).json(grupoActualizado); 
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el grupo', detalle: error.message });
    }
};

exports.eliminarGrupo = async (req, res) => {
    const {id} = req.params;
    try {
        const grupoEliminado = await grupo.findOneAndDelete({id});
        if (!grupoEliminado) {
            return res.status(404).json({ message: 'No se encontró el grupo' });
        }
        res.status(200).json({ message: 'grupo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el grupo', detalle: error.message });
    }
};

exports.q6 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q6 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q6', detalle: error.message });
    }
};
