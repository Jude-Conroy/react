import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function ReportsGrid({data}) {
    const columns = [
        //alertname, description, severity, created_on
        { headerName: 'ID', field: 'report_id', sortable: true, filter: true, resizable: true },
        { headerName: 'Report Name', field: 'reportname', sortable: true, filter: true, resizable: true },
        { headerName: 'Location', field: 'location', sortable: true, filter: true, resizable: true }
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
export default ReportsGrid;