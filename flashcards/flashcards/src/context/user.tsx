import { createContext, useEffect, useState } from "react";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged
} from 'firebase/auth';

const UserContext = createContext({})

const UserProvider = ({ children }) => {

    const auth = getAuth();
    const [couldLogin, setCouldLogin] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const listenAuth = (userState: any) => {
        console.log('listenAuth', userState)
        setUser(auth.currentUser)
        setLoading(false)
    }



    const signIn = (email: string, password: string) => {
        console.log('xxx', email, password)
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {


        }).catch((error) => {
            console.log('error', error)
            setLoading(false)
        })

    }

    const signOut = () => {
        console.log('sai!!!')
        setLoading(true)

        signOutFirebase(auth)
            .then(() => {
                console.log("deslogado com sucesso")
            }).catch((error) => {
                console.log('error', error)
                setLoading(false)
            })
    }


    return (
        <UserContext.Provider value={{ couldLogin, signIn, signOut, user, loading }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }