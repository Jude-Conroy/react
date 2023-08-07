import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AuthCheck from "../security/Authenticated";
import StatusGrid from "../display/StatusGrid";

const Status = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when the component is mounted
        axios.get('http://localhost:5000/api/status')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <AuthCheck>
            <div className="App">
                <StatusGrid data={data} />
            </div>
        </AuthCheck>
    );
};

export default Status;
