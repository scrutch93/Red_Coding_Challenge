/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
require ('dotenv').config();

const columns: GridColDef[] = [
  { field: 'orderId', headerName: 'Order ID', width: 90 },
  {
    field: 'orderType',
    headerName: 'Order Type',
    type: 'number',
    width: 110,
    editable: true,
  }, 
  {
    field: 'customerName',
    headerName: 'Customer',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'createdDate',
    headerName: 'Creation Date',
    width: 150,
    editable: true,
  },
  {
    field: 'createdByUserName',
    headerName: 'Created By',
    width: 150,
    editable: true,
  },
  
  
];

/*const rows = [
  { id: 1, creationDate: 'Snow', createdBy: 'Jon', orderType: 35 },
  { id: 2, creationDate: 'Lannister', createdBy: 'Cersei', orderType: 42 },
  { id: 3, creationDate: 'Lannister', createdBy: 'Jaime', orderType: 45 },
  { id: 4, creationDate: 'Stark', createdBy: 'Arya', orderType: 16 },
  { id: 5, creationDate: 'Targaryen', createdBy: 'Daenerys', orderType: null },
  { id: 6, creationDate: 'Melisandre', createdBy: null, orderType: 150 },
  { id: 7, creationDate: 'Clifford', createdBy: 'Ferrara', orderType: 44 },
  { id: 8, creationDate: 'Frances', createdBy: 'Rossini', orderType: 36 },
  { id: 9, creationDate: 'Roxie', createdBy: 'Harvey', orderType: 65 },
];
*/
export default function Table() {
    
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://red-candidate-web.azurewebsites.net/api/Orders")
        .then((data) => data.json())
        .then((data) => setTableData (data))
    })
       


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}