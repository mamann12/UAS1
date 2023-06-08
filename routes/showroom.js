// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Showroom = require('../models/Showroom')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const showroomPost = new Showroom({
        merk: req.body.merk,
        nama: req.body.nama,
        transmisi: req.body.transmisi,
        tahunMobil: req.body.tahunMobil,
        harga: req.body.harga,

    })

    try {
        // simpan data 
        const showroom = await showroomPost.save()
        // response
        res.json(showroom)
    } catch (error) {
        res.json({message: error})
    }
})
 //read
 router.get('/', async(req,res)=>{
    try{
        const showroom = await Showroom.find()
        res.json(showroom)
    } catch(error){
        res.json({message:error})
    }            
}) 
//Update
router.put('/:showroomId', async(req, res)=>{
    const data ={
        merk: req.body.merk,
        nama: req.body.nama,
        transmisi: req.body.transmisi,
        tahunMobil: req.body.tahunMobil,
        harga: req.body.harga,
    }

    try{
        const showroom = await Showroom.updateOne({_id: req.params.showroomId}, data)
        res.json(showroom)
    }catch(error){
        res.json({message: error})
    }
})
//delete
router.delete('/:showroomId', async(req, res) => {
    try {
        // delete data 
        const showroom = await Showroom.deleteOne({_id: req.params.showroomId})
        // response
        res.json(showroom)
    } catch (error) {
        res.json({message: error})
    }
})
 
module.exports = router    