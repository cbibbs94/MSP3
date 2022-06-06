import { useState } from 'react'

const NewConsultForm = () => {
    
    const [consultInfo, setConsultInfo] = useState({
        firstName: '',
        lastName: '',
        email: '', 
        question: '',
        previousMentorship: '',
        contactInfo: '',
        preferredContact: '',
    })

    

    return (
        <main>
            <h1>Would you like a Consultation?</h1>
            <p>
                Please fill out the form below to request a meeting with our Head Consultant
            </p>
            <form>
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
                    <div onChange= { e => setConsultInfo({ ...consultInfo, previousMentorship: e.target.value })}>
                        <input
                            value={consultInfo.previousMentorship}
                            type='radio'
                            name='previousMentorship'
                        />
                        
                    </div>
                </div>
                {/* Preffered Contact Method */}
                {/* Contact info */}
            </form>
        
           
        </main>

    )

}

export default NewConsultForm