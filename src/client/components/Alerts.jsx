import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AlertsGrid from "../display/AlertsGrid";
import AuthCheck from "../security/Authenticated";

const Alert = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when the component is mounted
        axios.get('http://localhost:5000/api/alerts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <AuthCheck>
            <div className="App">
                <AlertsGrid data={data} />
            </div>
        </AuthCheck>
    );
};

export default Alert;
