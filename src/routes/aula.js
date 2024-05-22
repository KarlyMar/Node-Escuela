// /src/routes/aula.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
obtenerAulas,
obtenerAulaEspecifico,
crearAula,
actualizarAula,
eliminarAula
} = require('../controllers/aula');

// Importamos las funciones del controlador de Aulas
// Ruta para obtener todos los Aulas
router.get('/', obtenerAulas);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función obtenerAulas del controlador
// Ruta para obtener un Aula por su ID
router.get('/:id', obtenerAulaEspecifico);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se ejecuta la función obtenerAulaPorId del controlador
// Ruta para crear un nuevo Aula
router.post('/', crearAula);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función crearAula del controlador
// Ruta para actualizar un Aula por su ID.
router.put('/:id', actualizarAula);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se ejecuta la función actualizarAula del controlador
// Ruta para eliminar un Aula por su ID
router.delete('/:id', eliminarAula);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se ejecuta la función eliminarAula del controlador
// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
module.exports = router;