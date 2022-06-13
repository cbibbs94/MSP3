// Server Dependencies
require('dotenv').config()
const express = require('express')
const cors =require('cors')
const path = require('path')


// Middleware and Configs
const PORT = process.env.PORT
const app = express()
app.use(cors({
    origin: 'localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, './client/build',)))



Routes
app.get('/', (req, res) => {
    res.json({
        message: 'API Landing Zone! Project is currently under Development, Standby by for some dope stuff!'
    })
})

//Consultform Routes
app.use('/consultForm', require('./controllers/consult_controller.js'))
app.use('/consultUser', require('./controllers/consult_NewUsers'))
app.use('/consultAuth', require('./controllers/consult_auth_controller'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

//Port Connection
app.listen(PORT, () => {
    console.log("Alright people wake up, LET'S LOOK ALIVE!!")
})
