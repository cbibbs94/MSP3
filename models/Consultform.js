const mongoose = require('mongoose')
const {Schema} = mongoose

//ConsultForm Schema
const consultFormSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    question: {
        type: String
    },
    previousMentorship: {
        type: String,
        enum: ['Mentor', 'Business Advisor', 'Business Success Coach', 'Combonation', 'None'] 
    }, 
    preferredContact: {
        type: String,
        enum: ['E-mail', 'Video Conference', 'Phone Conference']
    },
    contactInfo: {
        phoneNumber: {
            type: String,
        }      
    }


})

// model and export
const ConsultForm = mongoose.model('Consultform', consultFormSchema)
module.exports = ConsultForm
