import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listaTarea, obtenerTarea } from "../controllers/tareas.controllers";

const rutas = Router();

rutas.route("/tarea")
.get(listaTarea)
.post(crearTarea)

rutas.route("/tarea/:id")
.get(obtenerTarea)
.put(editarTarea)
.delete(borrarTarea)

export default rutas