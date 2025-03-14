import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const SecureRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if(!user) {
        return <Navigate to="/login" replace/>
    }

    return children;
}