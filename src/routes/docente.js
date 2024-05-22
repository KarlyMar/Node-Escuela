// /src/routes/docente.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
obtenerDocentes,
obtenerDocenteEspecifico,
crearDocente,
actualizarDocente,
eliminarDocente,
q4,
q9
} = require('../controllers/docente');

// Importamos las funciones del controlador de Docentes
// Ruta para obtener todos los Docentes
router.get('/', obtenerDocentes);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función obtenerDocentes del controlador
// Ruta para obtener un Docente por su ID
router.get('/:rfc', obtenerDocenteEspecifico);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se ejecuta la función obtenerDocentePorId del controlador
// Ruta para crear un nuevo Docente
router.post('/', crearDocente);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función crearDocente del controlador
// Ruta para actualizar un Docente por su ID.
router.put('/:rfc', actualizarDocente);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se ejecuta la función actualizarDocente del controlador
// Ruta para eliminar un Docente por su ID
router.delete('/:rfc', eliminarDocente);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se ejecuta la función eliminarDocente del controlador
// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
router.get('/materia/:id', q4);

router.get('/:rfc/grupo', q9);

module.exports = router;