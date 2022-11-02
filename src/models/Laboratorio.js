import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Laboratorio = new Schema({
    nome: String,
    endereco: String,
    status: [String],
    isDeleted: Boolean
})

const Lab = model("laboratorio", Laboratorio);

export default Lab;