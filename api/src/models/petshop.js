const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petshop = new Schema({
    nome: String,
    logo: String,
    categoria: String,
    detaque: Number,
    location: Object,
    recipient_id: String
})

module.exports = mongoose.model('Petshop', petshop)