import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Exame = new Schema({
    nome_exame: {
        type: String,
        unique: true
    },
    tipo_exame: String,
    status_exame: String,
});

Exame.pre('find', function () {
    this.where({ isDeleted: false });
});

const ExameSchema = model("Exame", Exame);
export default ExameSchema;