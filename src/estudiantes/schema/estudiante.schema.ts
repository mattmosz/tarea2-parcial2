import mongoose from "mongoose";

export const EstudianteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    carrera: {type: String, required: true},
    promedio: {type: Number, required: true}
},{
    timestamps: true,
});

EstudianteSchema.index({nombre: 1}, {unique: true});