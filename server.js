// Server Dependencies
require('dotenv').config()
const express = require('express')
const cors =require('cors')


// Middleware and Configs
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())



//Routes
app.get('/', (req, res) => {
    res.json({
        message: 'API Landing Zone! Project is currently under Development, Standby by for some dope stuff!'
    })
})

//Consultform Routes
app.use('/consultForm', require('./controllers/consult_controller.js'))

//Port Connection
app.listen(PORT, () => {
    console.log("Alright people wake up, LET'S LOOK ALIVE!!")
})
