import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listaTarea, obtenerTarea } from "../controllers/tareas.controllers";
import { check } from "express-validator";
const rutas = Router();

rutas.route("/tarea")
.get(listaTarea)
.post([
    check("tarea")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:200})
    .withMessage("La tarea debe tener entre 5 y 200 caracteres")
],crearTarea)

rutas.route("/tarea/:id")
.get(obtenerTarea)
.put([
    check("tarea")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:200})
    .withMessage("La tarea debe tener entre 5 y 200 caracteres")
],editarTarea)
.delete(borrarTarea)

export default rutas