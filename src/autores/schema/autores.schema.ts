import mongoose from "mongoose";

export const AutoresSchema = new mongoose.Schema({
    nombre: {type: String, required: true}
},{
    timestamps: true,
});

AutoresSchema.index({nombre: 1}, {unique: true});