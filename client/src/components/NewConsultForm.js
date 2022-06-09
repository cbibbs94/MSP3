import { useState, useEffect } from 'react'

const NewConsultForm = () => {
    
    const [consultInfo, setConsultInfo] = useState({
        firstName: '',
        lastName: '',
        email: '', 
        question: '',
        previousMentorship: '',
        contactInfo: {},
        preferredContact: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:5001/consultForm', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(consultInfo)
        })
        
    }

    

    return (
        <main>
            <h1>Would you like a Consultation?</h1>
            <p>
                Please fill out the form below to request a meeting with our Head Consultant
            </p>
            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className='form-group' >
                    <label htmlFor="firstName">First Name</label>
                    <input
                        required
                        value={consultInfo.firstName}
                        onChange = {e => setConsultInfo({ ...consultInfo, firstName: e.target.value })}
                        className='form-control'
                        id='firstName'
                        name='firstName'
                    />
                </div>
                
                {/* Last Name */}
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        required
                        value={consultInfo.lastName}
                        onChange = {e => setConsultInfo({ ...consultInfo, lastName: e.target.value })}
                        className='form-control'
                        id='lastName'
                        name='lastName'
                    />
                </div>
                
                {/* E-mail */}
                <div>
                    <label htmlFor="email">Your E-Mail Address</label>
                    <input
                        required
                        value={consultInfo.email}
                        onChange = { e => setConsultInfo({ ...consultInfo, email: e.target.value })}
                        type= 'email'
                        id = 'email'
                        name= 'email'

                    />
                </div>

                {/* Questions */}
                <div>
                    <label htmlFor="question">Questions for our Consult?</label>
                    <textarea
                        required
                        value={consultInfo.question}
                        onChange={ e => setConsultInfo({ ...consultInfo, question: e.target.value })}
                        id='question'
                        name='question'
                    />
                </div>

                {/* Previous Mentorship */}
                <div>
                    <label htmlFor="previousMentorship">Have you ever worked with a Mentor, Business Advisor, or Business Success Coach before?</label>
                    <div onChange= {e =>{console.log(e.target.value); setConsultInfo({ ...consultInfo, previousMentorship: e.target.value})}}>
                        <input
                            type='radio'
                            name='previousMentorship'
                            value='Mentor'
                        /> Mentor
                        <input                            
                            type='radio'
                            name='previousMentorship'
                            value='Business Advisor'
                        /> Business Advisor
                        <input 
                            type='radio'
                            name='previousMentorship'
                            value='Business Success Coach'
                        />Business Success Coach
                        <input
                            type='radio'
                            name='previousMentorship'
                            value='Combonation'
                        />Combonation
                        <input
                            type='radio'
                            name='previousMentorship'
                            value='None'
                        />None
                    </div>
                </div>
                {/* Preffered Contact Method */}
                <div onChange={ e => setConsultInfo({ ...consultInfo, preferredContact: e.target.value})}>
                    <input
                        type='radio'
                        name='preferredContact'
                        value='E-mail'
                        
                    />E-mail
                    <input
                        type='radio'
                        name='preferredContact'
                        value='Video Conference'
                        
                    />Video Conference
                    <input 
                        type='radio'
                        name='preferredContact'
                        value='Phone Conference'
                       
                    />Phone Conference
                </div>
                
                {/* Contact info */}
                <div>
                    <label>Phone Number</label>
                    <input 
                        value={consultInfo.contactInfo.phoneNumber}
                        onChange={e => setConsultInfo({...consultInfo, contactInfo: {phoneNumber: e.target.value}})}
                        className='form-control'
                        id='contactInfo'
                        name='contactInfo'
                        type='tel'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    />
                </div>
                <input className='btn btn-primary' type='submit' value='Submit Form' />
            </form>
        
           
        </main>

    )

}

export default NewConsultForm