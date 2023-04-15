import { createContext, useState } from "react";

const UserContext = createContext({})

const UserProvider = ({ children }) => {

    const [couldLogin, setCouldLogin] = useState(true)

    return (
        <UserContext.Provider value={{ couldLogin }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider }