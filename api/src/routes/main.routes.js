const express = require('express')
const router = express.Router()

const Petshop = require('../models/petshop')
const Product = require('../models/product')

router.get('/petshops', async (req, res) => {

    try {
        const petshops = await Petshop.find()
        res.json({ error: false, petshops })
    } catch (err) {
        res.json({error: true, message: err.message})
    }
})

router.get('/petshop/:id', async (req, res) => {

    try {
        const petshop = await Petshop.findById(req.params.id)
        let products = await Product.find({
            petshop_id: petshop._id
        })

        res.json({ error: false, petshop: { ...petshop._doc, products} })
    } catch (err) {
        res.json({error: true, message: err.message})
    }
})


module.exports = router