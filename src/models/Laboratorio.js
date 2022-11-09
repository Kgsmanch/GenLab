import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Laboratorio = new mongoose.Schema({
    nome: {
        type: String,
        unique: true
    },
    endereco: String,
    status: String,
    exame_labs: [{ type: mongoose.ObjectId, ref: 'Exame' }],
    isDeleted: { type: Boolean, default: 'false' }
})

Laboratorio.pre('find', function () {
    this.where({ isDeleted: false });
})


const Lab = model("laboratorio", Laboratorio);

export default Lab;