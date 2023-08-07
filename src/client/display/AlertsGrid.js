import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function AlertsGrid({data}) {
    const columns = [
        //alertname, description, severity, created_on
        { headerName: 'ID', field: 'alert_id', sortable: true, filter: true, resizable: true },
        { headerName: 'Alert Name', field: 'alertname', sortable: true, filter: true, resizable: true },
        { headerName: 'Description', field: 'description', sortable: true, filter: true, resizable: true },
        { headerName: 'Severity', field: 'severity', sortable: true, filter: true, resizable: true },
        { headerName: 'Created', field: 'created_on', sortable: true, filter: true, resizable: true }
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
            <AgGridReact
                columnDefs={columns}
                rowData={data}>
            </AgGridReact>
        </div>
    );
}
export default AlertsGrid;