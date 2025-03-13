import React, { useState, createContext} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const guest = {username: "", password: "", authenticated: false, authority: "GUEST"};
    const [user, setUser] = useState(guest);

    const validateLogin = (username, password) => {
        if(username === "admin" && password === "password") {
            
            setUser({username: username, password: password, authenticated: false, authority: "ADMIN"});
            return true;
        }
        return false;    
    }

    const logout = () => {
        setUser(guest);
    }

    return (
        <UserContext.Provider value={{validateLogin, logout}}>
            {children}
        </UserContext.Provider>
    )
}

