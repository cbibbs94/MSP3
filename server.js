// Server Dependencies
require('dotenv').config()
const express = require('express')

// Middleware and Configs
const PORT = process.env.PORT
const app = express()




//Routes
app.get('/', (req, res) => {
    res.json({
        message: 'API Landing Zone! Project is currently under Development, Standby by for some dope stuff! API Coming soon!'
    })
})

//Consultform Routes
app.use('/consultForm', require('./controllers/consult_controller.js'))

//Port Connection
app.listen(PORT, () => {
    console.log("Alright people wake up, LET'S LOOK ALIVE!!")
})
