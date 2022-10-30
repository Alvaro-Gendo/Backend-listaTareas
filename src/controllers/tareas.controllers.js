import Tarea from "../models/tarea";

export const listaTarea = async (req, res) => {
  try {
    const listaTareas = await Tarea.find();
    res.status(200).json(listaTareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al encontrar una tarea",
    });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      message: "La tarea fue correctamente agregada",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error al intentar agregar una tarea",
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "La tarea no fue encontrada",
    });
  }
};

export const editarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        message: "La tarea fue actualizada"
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "La tarea no fue actualizada",
    });
  }
};
