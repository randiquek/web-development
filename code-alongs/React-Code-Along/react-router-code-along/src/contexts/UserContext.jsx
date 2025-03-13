import React, { useState, createContext} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const guest = {username: "", password: "", authenticated: false, authority: "GUEST"};
    const [user, setUser] = useState(guest);

    const validateLogin = (username, password) => {
        // react front end creates a fetch with method type POST
        // endpoint in the api will query table for the username
        // endpoint will verify that the username/password matches the user stored in database
        // end pount will return user information if valid, error if incorrect
        // react front end uses the response to either reject login or log user in
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

