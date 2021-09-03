const express = require('express');
const rutas = express.Router()

const { isLoggedIn } = require("../lib/auth")

const { mostrar, agregar, listar, editar, actualizarEtapa,eliminar } = require("../controladores/etapa_controlador")

rutas.use(isLoggedIn)

rutas.get("/agregar/:id", isLoggedIn, mostrar)
rutas.post("/agregar/:id", isLoggedIn, agregar)
rutas.get("/listar/:id", isLoggedIn, listar)
rutas.get("/editar/:id", isLoggedIn, editar)
rutas.post("/editar/:id", isLoggedIn, actualizarEtapa)
rutas.get("/eliminar/:id", isLoggedIn, eliminar)

module.exports = rutas