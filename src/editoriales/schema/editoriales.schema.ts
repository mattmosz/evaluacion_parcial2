import mongoose from "mongoose";

export const EditorialesSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
},{
    timestamps: true
});

EditorialesSchema.index({nombre: 1}, {unique: true});
