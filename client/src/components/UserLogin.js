import {useState, useContext} from 'react'
import { CurrentUser } from '../contexts/CurrentUser'
import { useNavigate } from 'react-router'

const UserLogin = () => {

    const navigate = useNavigate()
    
    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errMessage, setErrMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch('/consultAuth', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/')
        } else {
            setErrMessage(data.message)
        }
    }

    return (
        <main>
            <h1>Login</h1>
            {errMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default UserLogin