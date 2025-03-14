import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    const validateLogin = (username, password) => {
        return fetch("http://localhost:8080/users/login",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ username, password })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Invalid login');
            })
            .then((data) => {
                setUser(data);
                return data;
              });
      };
    


    const logout = () => {
        setUser(null);
    }


    return (
        <UserContext.Provider value={{user, validateLogin, logout}}>
            {children}
        </UserContext.Provider>
    )


}