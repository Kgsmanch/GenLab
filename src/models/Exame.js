import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Exame = new Schema({
    nome: { type: String, unique: true },
    tipo: String,
    status: String,
    isDeleted: { type: Boolean, default: 'false' }
})

Exame.pre('find', function () {
    this.where({ isDeleted: false });
});

const ExameSchema = model("Blog", Exame);

export default ExameSchema;