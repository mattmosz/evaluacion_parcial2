import mongoose from "mongoose";

export const LibrosSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    autores: [{type: mongoose.Schema.Types.ObjectId, ref: 'autores'}],
    editorial: {type: mongoose.Schema.Types.ObjectId, ref: 'editoriales'}
},{
    timestamps: true
});