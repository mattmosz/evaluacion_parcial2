import mongoose from "mongoose";

export const PrestamosSchema = new mongoose.Schema({
    fecha:{type:Date, required:true},
    libro:[{type:mongoose.Schema.Types.ObjectId, ref:'libros'}],
},{
    timestamps:true,
});