import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Exame = new Schema({
    nome: String,
    tipo: [String],
    status: [String]
})

const ExameSchema = model("Blog", Exame);

export default ExameSchema;