import {createContext, useState, useEffect} from 'react'

export const CurrentUser = createContext()

function CurrentUserProvider({children}) {

    const [currentUser, setCurrentUser] =useState(null)
    useEffect(() => {
        const loggedInUser = async () => {
            let response = await fetch('http://localhost:5001/consultAuth/profile', {
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        loggedInUser()
    }, [])

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}