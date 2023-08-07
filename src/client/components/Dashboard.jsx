import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TradesGrid from "../display/TradesGrid";
import AuthCheck from "../security/Authenticated";
import Alerts from "./Alerts";

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when the component is mounted
        axios.get('http://localhost:5000/api/trading')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <AuthCheck>
            <div className="App">
                <TradesGrid data={data} />
            </div>
            <div className="App">
                <Alerts data={data} />
            </div>
        </AuthCheck>
    );

};

export default Dashboard;
