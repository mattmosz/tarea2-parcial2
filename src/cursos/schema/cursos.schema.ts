import { time } from "console";
import mongoose from "mongoose";
import { timestamp } from "rxjs";

export const cursoSchema = new mongoose.Schema(
    {
        nombre: {type:String, required:true},
        creditos: {type:Number, required:true},
        profesor: {type:String, required:true},
        horario: {type:String, required:true},
        estudiantes: [{type:mongoose.Schema.Types.ObjectId, ref:'estudiante'}],
    },
    {timestamps:true,
    },
);

cursoSchema.index({nombre:1},{unique:true});