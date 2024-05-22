// /src/routes/alumno.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
obtenerAlumnos,
obtenerAlumnoEspecifico,
crearAlumno,
actualizarAlumno,
eliminarAlumno,
q1,
q2,
q3,
q7,
q8
} = require('../controllers/alumno');

// Importamos las funciones del controlador de alumnos
// Ruta para obtener todos los alumnos
router.get('/', obtenerAlumnos);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función obtenerAlumnos del controlador
// Ruta para obtener un alumno por su ID
router.get('/:nctrl', obtenerAlumnoEspecifico);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se ejecuta la función obtenerAlumnoPorId del controlador
// Ruta para crear un nuevo alumno
router.post('/', crearAlumno);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función crearAlumno del controlador
// Ruta para actualizar un alumno por su ID.
router.put('/:nctrl', actualizarAlumno);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se ejecuta la función actualizarAlumno del controlador
// Ruta para eliminar un alumno por su ID
router.delete('/:nctrl', eliminarAlumno);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se ejecuta la función eliminarAlumno del controlador
// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
router.get('/:nctrl/materia', q1);

router.get('/grupo/:id', q2);

router.get('/:nctrl/calificaciones', q3);

router.get('/:nctrl/materia/hora/:hora', q7);

router.get('/:nctrl/materiasfaltantes', q8);

module.exports = router;