// /src/server.js
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
const express = require('express'); // Framework para construir aplicaciones web y APIs
const cors = require('cors'); // Middleware para permitir solicitudes de recursos cruzados
const morgan = require('morgan'); // Middleware para el registro de solicitudes HTTP
const logger = require('./middleware/logger'); // Middleware personalizado para registrar solicitudes en Redis
const bodyParser = require('body-parser');

const { mongoose, redisClient } = require('./config/db'); // Importamos las configuraciones de MongoDB y Redis
// Importamos las rutas
const alumnosRoutes = require('./routes/alumno'); // Rutas relacionadas con la entidad alumnos
const materiasRoutes = require('./routes/materia'); // Rutas relacionadas con la entidad materias
const aulasRoutes = require('./routes/aula');
const gruposRoutes = require('./routes/grupo');
const docenteRoutes = require('./routes/docente');

// Creamos una instancia de la aplicación Express
const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // Para JSON
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Para URL-encoded

// Middleware para parsear solicitudes JSON
app.use(express.json());
// Middleware para permitir solicitudes de recursos cruzados
app.use(cors());
// Middleware para registrar solicitudes HTTP
app.use(morgan('dev'));

// Middleware personalizado para registrar solicitudes en Redis
app.use(logger);
// Usamos las rutas importadas
app.use('/api/alumno', alumnosRoutes);
app.use('/api/materia', materiasRoutes);
app.use('/api/aula', aulasRoutes);
app.use('/api/grupo', gruposRoutes);
app.use('/api/docente', docenteRoutes);

// Definimos el puerto en el que la aplicación escuchará las solicitudes
const PORT = process.env.PORT || 3000;
// Iniciamos el servidor y lo ponemos a escuchar en el puerto definido
app.listen(PORT, () => {
console.log(`Servidor corriendo en puerto ${PORT}`);
});