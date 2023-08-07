import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function TradesGrid({data}) {
    const columns = [
        //tradername, description, isin, price, created_on
        { headerName: 'ID', field: 'trade_id', sortable: true, filter: true, resizable: true },
        { headerName: 'Trader Name', field: 'tradername', sortable: true, filter: true, resizable: true },
        { headerName: 'Description', field: 'description', sortable: true, filter: true, resizable: true },
        { headerName: 'ISIN', field: 'isin', sortable: true, filter: true, resizable: true },
        { headerName: 'Price', field: 'price', sortable: true, filter: true, resizable: true },
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
export default TradesGrid;