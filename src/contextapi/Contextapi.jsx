import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useState, useEffect } from 'react'
import { _Auth } from '../Backend/Bass'



export let Authcontext = createContext()


const Contextapi = ({ children }) => {

    let [userData, setUserData] = useState(null)

//console.log(userData);

    useEffect(() => {
        let logout = onAuthStateChanged(_Auth, (user) => {
            if (user?.emailVerified === true) {
                setUserData(user)
            }
            else {
                setUserData(null)
            }
        })
        return () => logout()
    },[])



    return (
        <Authcontext.Provider value={userData}>
            {children}
        </Authcontext.Provider>
    )
}

export default Contextapi