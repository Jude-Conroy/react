import React from 'react';
import { SessionContext } from './client/SessionContext';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './client/security/SignIn';
import Nav from "./client/components/Nav";
import {AuthProvider} from "./client/security/AuthContext";
import Dashboard from "./client/components/Dashboard";
import Alerts from "./client/components/Alerts";
import Trading from "./client/components/Trading";
import Reports from "./client/components/Reports";
import Status from "./client/components/Status";
import SharedWorkerComponent from "./client/components/SharedWorkerComponent";

function App() {
    const [jwtToken, setJwtToken] = React.useState('');

    return (
        <AuthProvider>
            <SessionContext.Provider value={{ jwtToken, setJwtToken }}>
                <SharedWorkerComponent/>
                <ToastContainer />
                <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/signin" replace />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/trading" element={<Trading />} />
                        <Route path="/alerts" element={<Alerts />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/status" element={<Status />} />
                    </Routes>
                </BrowserRouter>
            </SessionContext.Provider>
        </AuthProvider>
    );
}

export default App;
