// /src/routes/Grupo.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
obtenerGrupos,
obtenerGrupoEspecifico,
crearGrupo,
actualizarGrupo,
eliminarGrupo,
q6
} = require('../controllers/grupo');

// Importamos las funciones del controlador de Grupos
// Ruta para obtener todos los Grupos
router.get('/', obtenerGrupos);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función obtenerGrupos del controlador
// Ruta para obtener un Grupo por su ID
router.get('/:id', obtenerGrupoEspecifico);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se ejecuta la función obtenerGrupoPorId del controlador
// Ruta para crear un nuevo Grupo
router.post('/', crearGrupo);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función crearGrupo del controlador
// Ruta para actualizar un Grupo por su ID.
router.put('/:id', actualizarGrupo);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se ejecuta la función actualizarGrupo del controlador
// Ruta para eliminar un Grupo por su ID
router.delete('/:id', eliminarGrupo);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se ejecuta la función eliminarGrupo del controlador
// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos

router.get('/materia/:id', q6);

module.exports = router;