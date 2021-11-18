import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order ID', width: 90 },
  {
    field: 'creationDate',
    headerName: 'Creation Date',
    width: 150,
    editable: true,
  },
  {
    field: 'createdBy',
    headerName: 'Created By',
    width: 150,
    editable: true,
  },
  {
    field: 'orderType',
    headerName: 'Order Type',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Customer',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'creationDate') || ''} ${
        params.getValue(params.id, 'createdBy') || ''
      }`,
  },
];

const rows = [
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

export default function Table() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}