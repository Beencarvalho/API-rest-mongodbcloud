//schema do banco (modelo de como é o documento guardado no banco)

import mongoose from "mongoose";


const livrosSchema = new mongoose.Schema(
    {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    numeropaginas: {type: Number}
    }
)

const livros = mongoose.model('livros', livrosSchema);

export default livros;