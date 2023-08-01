const mongoose = require('mongoose');

// Definisikan skema (schema) untuk model data
const dataSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true,
        unique: true
    },
    divisi: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

// Buat model berdasarkan skema yang telah didefinisikan
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;