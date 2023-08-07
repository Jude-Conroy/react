import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AuthCheck from "../security/Authenticated";
import ReportsGrid from "../display/ReportsGrid";

const Reports = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when the component is mounted
        axios.get('http://localhost:5000/api/reports')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Errord: ${error}`));
    }, []);

    return (
        <AuthCheck>
            <div className="App">
                <ReportsGrid data={data} />
            </div>
        </AuthCheck>
    );
};

export default Reports;
