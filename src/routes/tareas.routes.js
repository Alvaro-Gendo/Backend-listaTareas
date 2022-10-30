import { Router } from "express";
import { crearTarea, listaTarea, obtenerTarea } from "../controllers/tareas.controllers";

const rutas = Router();

rutas.route("/tarea")
.get(listaTarea)
.post(crearTarea)

rutas.route("/tarea/:id")
.get(obtenerTarea)
.put()
.delete()

export default rutas