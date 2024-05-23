const alumno = require('../models/alumno');
const Grupo = require('../models/grupo');


exports.obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await alumno.find();
        res.status(200).json({ alumnos });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos', detalle: error.message });
    }
};

exports.obtenerAlumnoEspecifico = async (req, res) => {
    const { nctrl } = req.params;
    try {
        const alumnos = await alumno.findOne({ nctrl });
        if (!alumno) {
            return res.status(404).json({ message: 'No se encontró la alumno' });
        }
        res.status(200).json({ alumnos });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el alumno', detalle: error.message });
    }
};

exports.crearAlumno = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            // Si es un arreglo, utilizar insertMany para insertar todos los alumnos
            const alumnosGuardados = await alumno.insertMany(req.body);
            res.status(201).json({ alumnos: alumnosGuardados });
        } else {
            // Si no es un arreglo, guardar un solo alumno
            const nuevoAlumno = new alumno(req.body);
            const alumnoGuardado = await nuevoAlumno.save();
            res.status(201).json({ alumno: alumnoGuardado });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el alumno', detalle: error.message });
    }
};

exports.actualizarAlumno = async (req, res) => {
    const { nctrl } = req.params;
    try {
        const alumnoActualizado = await alumno.findOneAndUpdate({ nctrl }, req.body, {
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
    const { nctrl } = req.params;
    try {
        const alumnoEliminado = await alumno.findOneAndDelete({ nctrl });
        if (!alumnoEliminado) {
            return res.status(404).json({ message: 'No se encontró el alumno' });
        }
        res.status(200).json({ message: 'alumno eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el alumno', detalle: error.message });
    }
};


exports.q1 = async (req, res) => {
    const { nctrl } = req.params;
    try {
        const resultado = await alumno.aggregate([
            { $match: { nctrl: nctrl } },
            { $unwind: "$expediente_academico.grupos_cursados" },
            {
                $lookup: {
                    from: "grupos",
                    localField: "expediente_academico.grupos_cursados.grupo",
                    foreignField: "id",
                    as: "expediente_academico.grupos_cursados.grupo",
                },
            },
            { $unwind: "$expediente_academico.grupos_cursados.grupo" },
            {
                $group: {
                    _id: "$nctrl",
                    alumno: { $first: "$datos" },
                    materias: {
                        $push: "$expediente_academico.grupos_cursados.grupo.materia",
                    },
                },
            },
        ]);
        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: `Error al obtener las materias cursadas del alumno con nctrl: ${nctrl}`, detalle: error.message });
    }
};
exports.q2 = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await Grupo.findOne({ id }, 'materia alumnos');
        if (!resultado) {
            return res.status(404).send({ error: `El grupo con el id ${id} no fue encontrado` });
        }
        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: `Error al obtener los alumnos del grupo con id: ${id} que cursan la materia`, detalle: error.message });
    }
};
exports.q3 = async (req, res) => {
    const { nctrl } = req.params;
    try {
        const resultado = await alumno.aggregate([
            { $match: { nctrl: nctrl } },
            { $unwind: "$expediente_academico.grupos_cursados" },
            {
                $lookup: {
                    from: "grupos",
                    localField: "expediente_academico.grupos_cursados.grupo",
                    foreignField: "id",
                    as: "expediente_academico.grupos_cursados.grupo",
                },
            },
            { $unwind: "$expediente_academico.grupos_cursados.grupo" },
            {
                $group: {
                    _id: "$nctrl",
                    alumno: { $first: "$datos" },
                    materias: {
                        $push: {
                            calificacion: "$expediente_academico.grupos_cursados.calificacion",
                            materia: "$expediente_academico.grupos_cursados.grupo.materia",
                        },
                    },
                },
            },
        ]);
        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: `Error al obtener las calificaciones del alumno con nctrl: ${nctrl}`, detalle: error.message });
    }
};
exports.q7 = async (req, res) => {
    const { nctrl } = req.params;
    let { hora } = req.params;
    hora = parseInt(hora);
    try {
        const resultado = await alumno.aggregate([
            { $match: { nctrl: nctrl } },
            {
                $lookup: {
                    from: "grupos",
                    localField: "expediente_academico.grupos_cursados.grupo",
                    foreignField: "id",
                    as: "expediente_academico.grupos_cursados.grupo",
                },
            },
            { $unwind: '$expediente_academico.grupos_cursados.grupo' },
            { $match: { 'expediente_academico.grupos_cursados.grupo.horario': hora } },
            {
                $group: {
                    '_id': '$nctrl',
                    'alumno': { $first: '$datos' },
                    'materias': {
                        $push: {
                            'horario': '$expediente_academico.grupos_cursados.grupo.horario',
                            'materia': '$expediente_academico.grupos_cursados.grupo.materia',
                        }
                    }
                }
            }
        ]);
        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: `Error al obtener las materias del alumno con nctrl: ${nctrl} a la hora: ${hora}`, detalle: error.message });
    }
};

exports.q8 = async (req, res) => {
    const { nctrl } = req.params;
    try {
        const resultado = await alumno.aggregate([
            { $match: { nctrl: nctrl } },
            {
                $lookup: {
                    from: "grupos",
                    localField: "expediente_academico.grupos_cursados.grupo",
                    foreignField: "id",
                    as: "expediente_academico.grupos_cursados.grupo",
                },
            },
            {
                $project: {
                    _id: '$nctrl',
                    alumno: '$datos',
                    materias: '$expediente_academico.grupos_cursados.grupo.materia',
                    reticula: '$expediente_academico.reticula'
                }
            },
            {
                $addFields: {
                    // Extraemos los IDs de las materias cursadas
                    materiasIds: {
                        $map: {
                            input: '$materias',
                            as: 'materia',
                            in: '$$materia.id'
                        }
                    },
                    // Extraemos los IDs de la reticula
                    reticulaIds: {
                        $map: {
                            input: '$reticula',
                            as: 'materia',
                            in: '$$materia.id'
                        }
                    }
                }
            },
            {
                $addFields: {
                    // Obtenemos los IDs de las materias que están en reticula pero no en materias cursadas
                    materiasPorCursarIds: {
                        $setDifference: ['$reticulaIds', '$materiasIds']
                    }
                }
            },
            {
                $addFields: {
                    // Filtramos las materias de la reticula para obtener los subdocumentos completos de las materias por cursar
                    materiasPorCursar: {
                        $filter: {
                            input: '$reticula',
                            as: 'materia',
                            cond: { $in: ['$$materia.id', '$materiasPorCursarIds'] }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 1,
                    alumno: 1,
                    materiasPorCursar: 1
                }
            }
        ]);
        res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({ error: `Error al obtener las materias por cursar del alumno con nctrl: ${nctrl}`, detalle: error.message });
    }
};



