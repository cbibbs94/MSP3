import {useState, useEffect} from 'react'

const NewUserSignUp = () => {
    const [user , setUser] =useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:5001/consultUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        
    }

    return (
        <main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
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
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
    )
} 

export default NewUserSignUp