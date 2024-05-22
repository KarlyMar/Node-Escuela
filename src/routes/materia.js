// /src/routes/materia.js
// Importar los módulos necesarios
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express
const {
obtenerMaterias,
obtenerMateriaEspecifico,
crearMateria,
actualizarMateria,
eliminarMateria,
q5
} = require('../controllers/materia');

// Importamos las funciones del controlador de Materias
// Ruta para obtener todos los Materias
router.get('/', obtenerMaterias);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función obtenerMaterias del controlador
// Ruta para obtener un Materia por su ID
router.get('/:id', obtenerMateriaEspecifico);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se ejecuta la función obtenerMateriaPorId del controlador
// Ruta para crear un nuevo Materia
router.post('/', crearMateria);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función crearMateria del controlador
// Ruta para actualizar un Materia por su ID.
router.put('/:id', actualizarMateria);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se ejecuta la función actualizarMateria del controlador
// Ruta para eliminar un Materia por su ID
router.delete('/:id', eliminarMateria);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se ejecuta la función eliminarMateria del controlador
// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos

router.get('/:id/alumno/calificaciones/:cali', q5);

module.exports = router;