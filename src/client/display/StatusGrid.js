import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function StatusGrid({data}) {
    const columns = [
       // { id: 1, name: 'Service 1', status: 'OK', location: 'US'},
        { headerName: 'ID', field: 'id', sortable: true, filter: true, resizable: true },
        { headerName: 'Service Name', field: 'name', sortable: true, filter: true, resizable: true },
        { headerName: 'Status', field: 'status', sortable: true, filter: true, resizable: true },
        { headerName: 'location', field: 'location', sortable: true, filter: true, resizable: true }
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
export default StatusGrid;