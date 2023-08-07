// AuthContext.js
import React, { createContext, useState } from 'react';

// Create a new context
export const AuthContext = createContext(null);

// Create a provider component
export const AuthProvider = ({ children }) => {
    // Initialize your state
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Provide your state and its updater function to child components
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};