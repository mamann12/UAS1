const mongoose = require('mongoose')
const ShowroomSchema = mongoose.Schema({
    merk: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    transmisi: {
        type: String,
        required: true
    },
    tahunMobil:{
        type: String,
        required: true 
    },
    harga:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Showroom', ShowroomSchema)