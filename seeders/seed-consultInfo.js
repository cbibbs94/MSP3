const db =require('../models')

db.ConsultForm.create({
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'fake@email.com',
    question: 'What is the meaning of life?',
    previousMentorship: 'None',
    preferredContact: 'Video Conference',
    contactInfo: {
        phoneNumber: '702-555-5555'
    }

})
.then(() => {
    console.log('Seed data uploaded succesfully')
    process.exit()
})
.catch(err => {
    console.log('Upload failed', err)
    process.exit()
})