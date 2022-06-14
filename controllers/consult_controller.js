const router = require('express').Router()
const db = require("../models/MongooseORM")
const ConsultForm = require("../models/MongooseORM/Consultform")

//post route
router.post('/', (req, res) => {
    ConsultForm.create(req.body)
    res.status(200).json({
        message: 'Form Successfully submitted'
    })
})

module.exports = router