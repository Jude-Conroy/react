import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const AuthCheck = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log('The session is Authenticated:', children, isAuthenticated);

    return isAuthenticated ? children : <p>You must be logged in to see this page.</p>;
};

export default AuthCheck;
