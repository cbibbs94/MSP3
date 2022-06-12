import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { CurrentUser } from '../contexts/CurrentUser'

const NavBar = () => {
    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginButtons = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/signup")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginButtons = (
            <li style={{float: 'right'}}>
                Welcome {currentUser.firstName}
            </li>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => navigate("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => navigate("/ConsultForm")}>
                        Consult Form
                    </a>
                </li>
                {/* <li>
                    <a href="#" onClick={() => navigate("/")}>
                        check out our services
                    </a>
                </li> */}
                {loginButtons}
            </ul>
        </nav>
    )
}

export default NavBar