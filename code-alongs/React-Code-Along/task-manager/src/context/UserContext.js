import { createContext } from "react";

const userContext = createContext( {
    username: "Guest",
    isAdmin: false,
});


export default userContext;