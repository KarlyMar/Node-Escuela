const alumno  = require('../models/alumno');


exports.obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await alumno.find();
        res.status(200).json({alumnos});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos', detalle: error.message });
    }
};

exports.obtenerAlumnoEspecifico = async (req, res) => {
    const {nctrl} = req.params;
    try {
        const alumnos = await alumno.findOne({nctrl});
        if (!alumno) {
            return res.status(404).json({ message: 'No se encontró la alumno' });
        }
        res.status(200).json({ alumnos });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el alumno', detalle: error.message });
    }
};

exports.crearAlumno = async (req, res) => {
    const nuevoalumno = new alumno(req.body);
    try {
        const alumnosave = await nuevoalumno.save();
        res.status(201).json({ alumnosave });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el alumno', detalle: error.message });
    }
};

exports.actualizarAlumno = async (req, res) => {
    const {nctrl} = req.params;
    try {
        const alumnoActualizado = await alumno.findOneAndUpdate({nctrl}, req.body, {
            new: true
        });
        if (!alumnoActualizado) {
            return res.status(404).json({ message: 'No se encontró el alumno' });
        }
        res.status(200).json(alumnoActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el alumno', detalle: error.message });
    }
};

exports.eliminarAlumno = async (req, res) => {
    const {nctrl} = req.params;
    try {
        const alumnoEliminado = await alumno.findOneAndDelete({nctrl});
        if (!alumnoEliminado) {
            return res.status(404).json({ message: 'No se encontró el alumno' });
        }
        res.status(200).json({ message: 'alumno eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el alumno', detalle: error.message });
    }
};

// controllers/alumnoController.js

exports.q1 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q1 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q1', detalle: error.message });
    }
};

exports.q2 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q2 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q2', detalle: error.message });
    }
};

exports.q3 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q3 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q3', detalle: error.message });
    }
};

exports.q7 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q7 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q7', detalle: error.message });
    }
};

exports.q8 = async (req, res) => {
    try {
        res.status(200).json({ message: 'Operación q8 realizada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en la operación q8', detalle: error.message });
    }
};
