import Link from 'next/link'
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-quartz.css';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { CheckboxSelectionCallbackParams, HeaderCheckboxSelectionCallbackParams } from 'ag-grid-community';

const Aggrid1 = () => {

    var checkboxSelection = function (params: CheckboxSelectionCallbackParams) {
    // we put checkbox on the name if we are not doing grouping
    return params.api.getRowGroupColumns().length === 0;
    };

    var headerCheckboxSelection = function (
    params: HeaderCheckboxSelectionCallbackParams
    ) {
    // we put checkbox on the name if we are not doing grouping
    return params.api.getRowGroupColumns().length === 0;
    };
    const gridRef = useRef();

    // Custom Filters for applying to all
    const defaultColDefs = useMemo(() => ({
        sortable: true,
        filter: true
    }), []);

    // Row Data
    const [rowData, setRowData] = useState([
        {Name: 'Ford', Model: 'Focus', Price: 40000},
        {Name: 'Toyota', Model: 'Celica', Price: 45000},
        {Name: 'BMW', Model: '4 Series', Price: 50000},
    ]);
    // Column Data
    const [columnDefs, setColumnDefs] = useState([
        // for sorting and filtering data from specific col
        // {field: "Name", sortable: true, filter: true}, 
        {field: "Name",  minWidth: 250,checkboxSelection: checkboxSelection, headerCheckboxSelection: headerCheckboxSelection,},
        {field: "Model", minWidth: 250,},
        {field: "Price", minWidth: 250,},
    ]);


    const cellClickedListener = useCallback(e => {
        console.log("CellClicked : ",e)
    }, []);


    useEffect(() => {
        // fetch('https://www.ag-grid.com/example-assets/row-data.js')
        // .then(result => result.json())
        // .then(rowData => setRowData(rowData))
    }, []);

    const SelectAll = useCallback(e => {
        gridRef.current.api.selectAll()
    }, [gridRef])
    const DeselectAll = useCallback(e => {
        gridRef.current.api.deselectAll()
    }, [gridRef])

  return (
    <div>
        <div className='mt-2 mb-10'>
            <Link href="/ag_grid" className='bg-gray-800 text-white p-4 rounded-xl'>Go Back</Link>
        </div>
        <div className='bg-gray-100 mx-5 my-5'>
              <div className='text-2xl'>AgGrid1</div>
              <div className='mx-5 my-8 border border-black rounded p-4'>
                  <div className='ag-theme-quartz flex flex-col' style={{ height: 300, width: 800 }}>
                    <div className='flex flex-row space-x-2'>
                          <button className='p-2 bg-black text-white rounded-xl my-1 w-24' onClick={SelectAll}>Select All</button>
                          <button className='p-2 bg-black text-white rounded-xl my-1 w-24' onClick={DeselectAll}>DeSelect All</button>
                    </div>
                    <AgGridReact
                        ref={gridRef}
                        onCellClicked={cellClickedListener}
                        rowData={rowData} // row data
                        columnDefs={columnDefs} // defining columns data
                        defaultColDef={defaultColDefs} // for applying filter to all cols
                        animateRows={true} // to provide some animation when chaning or filtering
                        rowSelection='multiple' // selecting rows either single or multiple
                        pagination={true} // paginating row data
                    />
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Aggrid1