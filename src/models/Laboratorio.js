import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Laboratorio = new Schema({
    nome: {
        type: String,
        unique: true
    },
    endereco: String,
    status: String,
    isDeleted: { type: Boolean, default: 'false' }
})

Laboratorio.pre('find', function () {
    this.where({ isDeleted: false });
})


const Lab = model("laboratorio", Laboratorio);

export default Lab;