require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Now where is that darn Data? Oh it\'s at,', process.env.MONGO_URI)
})

module.exports.ConsultForm = require('./Consultform')