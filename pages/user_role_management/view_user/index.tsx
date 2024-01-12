import React, { useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";


const View_User = () => {
  // Row Data: The data to be display ed.
  const [rowData, setRowData] = useState([
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active', Action: 'Delete'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Inactive'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Inactive'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Inactive'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Inactive'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Inactive'},
    {UserName: 'Janet', DateCreated: '12 Aug 2022 - 12:25 am', Role:'HR Manager', Status: 'Active'},
  ]);
  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "UserName", flex: 1, headerName: "User Name", headerClass: 'text-lg text-gray-600',  cellClass: 'text-gray-500' },
    { field: "DateCreated", flex: 1, headerName: "Date Created", headerClass: 'text-lg text-gray-600',  cellClass: 'text-gray-500' },
    { field: "Role", flex: 1, headerName: "Role", headerClass: 'text-lg text-gray-600',  cellClass: 'text-gray-500' },
    { 
      field: "Status", 
      flex: 1,
      headerName: "Status",
      headerClass: 'text-lg text-gray-600',
      cellRenderer: params => 
    },

    {
      field: "Action", flex: 1, headerName: "Action", headerClass: 'text-lg text-gray-600', cellClass: 'text-gray-500',
      celRenderer: 
    },
  ]);

  const defaultColDefs = useMemo(() => ({
        sortable: true,
        filter: true,
        suppressSizeToFit: true 
    }), []);
  return (
    <div className='mx-5 my-5'>
      <div className='text-2xl mb-5'>User List</div>
      <div className="ag-theme-quartz"
      style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 700 }}
    >
      <AgGridReact
        defaultColDef={defaultColDefs}
        rowData={rowData}
        columnDefs={colDefs} 
        pagination={true}
        paginationPageSize={20}
        rowSelection={'multiple'}
        suppressRowClickSelection={true}
        groupSelectsChildren={true}
      />
    </div>
    </div>
  )
}

export default View_User