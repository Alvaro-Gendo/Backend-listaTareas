import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  tarea: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 200,

  },
});

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;