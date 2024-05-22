// /src/models/grupo.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Definir el esquema de Grupo
const grupoSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  docente: {
    rfc: { type: String, required: true },
    datos: {
      nombre: { type: String, required: true },
      carrera: { type: String, required: true },
      tecnologico: { type: String, required: true }
    },
  },
  aula: {
    id: { type: Number, required: true },
    edificio: { type: String, required: true },
    descripcion: { type: String, required: true }
  },
  materia: {
    id: { type: Number, required: true },
    datos: {
      nombre: { type: String, required: true },
      carrera: { type: String, required: true },
      descripcion: { type: String, required: true }
    },
    planDeEstudios: { type: String, required: true }
  },
  alumnos: [{
    nctrl: { type: String, required: true },
    datos: {
      curp: { type: String, required: true },
      nombre: { type: String, required: true },
      carrera: { type: String, required: true },
      tecnologico: { type: String, required: true }
    }
  }],
  horario: { type: Number, required: true }
}, {
  timestamps: true
});

// Crear y exportar el modelo Grupo basado en grupoSchema
const Grupo = model('Grupo', grupoSchema);
module.exports = Grupo;
