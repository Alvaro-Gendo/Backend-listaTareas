import { Router } from "express";
import { crearTarea, listaTarea } from "../controllers/tareas.controllers";

const rutas = Router();

rutas.route("/tarea")
.get(listaTarea)
.post(crearTarea)


export default rutas