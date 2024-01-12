import Link from "next/link";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import "ag-grid-enterprise";

const Aggrid2 = () => {
  const gridRef = useRef();

  // Custom Filters for applying to all
  const defaultColDefs = useMemo(
    () => ({
      sortable: true,
      filter: true,
      rowGroup: true,
    }),
    []
  );

  // Row Data
  const [rowData, setRowData] = useState([
    { Name: "Ford", Model: "Focus", Price: 40000 },
    { Name: "Toyota", Model: "Celica", Price: 45000 },
    { Name: "BMW", Model: "4 Series", Price: 50000 },
    { Name: "BMWd", Model: "4 Series", Price: 50000 },
    { Name: "BfdMW", Model: "4 Series", Price: 50000 },
    { Name: "BMdfW", Model: "4 Series", Price: 50000 },
    { Name: "BMWdf", Model: "4 Series", Price: 50000 },
    { Name: "BsdMW", Model: "4 Series", Price: 50000 },
    { Name: "BasfdgMW", Model: "4 Series", Price: 50000 },
    { Name: "BMsfdsdgW", Model: "4 Series", Price: 50000 },
    { Name: "rdgfBMW", Model: "4 Series", Price: 50000 },
    { Name: "BerdfMW", Model: "4 Series", Price: 50000 },
    { Name: "efrBMW", Model: "4 Series", Price: 50000 },
    { Name: "BMaesgW", Model: "4 Series", Price: 50000 },
    { Name: "BsfdgdMW", Model: "4 Series", Price: 50000 },
    { Name: "BsfdfsMW", Model: "4 Series", Price: 50000 },
  ]);
  // Column Data
  const [columnDefs, setColumnDefs] = useState([
    // for sorting and filtering data from specific col
    // {field: "Name", sortable: true, filter: true},
    { field: "Name" },
    // {field: "Model", rowGroup: true},  // to group row data by spefic col
    { field: "Model" },
    { field: "Price" },
  ]);

  const cellClickedListener = useCallback((e) => {
    console.log("CellClicked : ", e);
  }, []);

  useEffect(() => {
    // fetch('https://www.ag-grid.com/example-assets/row-data.js')
    // .then(result => result.json())
    // .then(rowData => setRowData(rowData))
  }, []);

  const SelectAll = useCallback(
    (e) => {
      gridRef.current.api.selectAll();
    },
    [gridRef]
  );
  const DeselectAll = useCallback(
    (e) => {
      gridRef.current.api.deselectAll();
    },
    [gridRef]
  );

  return (
    <div>
      <div className="mt-2 mb-10">
        <Link href="/ag_grid" className="bg-gray-800 text-white p-4 rounded-xl">
          Go Back
        </Link>
      </div>
      <div className="bg-gray-100 mx-5 my-5">
        <div className="text-2xl">AgGrid2</div>
        <div className="mx-5 my-8 border border-black rounded p-4">
          <div
            className="ag-theme-quartz flex flex-col"
            style={{ height: 300, width: 800 }}
          >
            <div className="flex flex-row space-x-2">
              <button
                className="p-2 bg-black text-white rounded-xl my-1 w-24"
                onClick={SelectAll}
              >
                Select All
              </button>
              <button
                className="p-2 bg-black text-white rounded-xl my-1 w-24"
                onClick={DeselectAll}
              >
                DeSelect All
              </button>
            </div>
            <AgGridReact
              ref={gridRef}
              rowGroupPanelShow="always"
              onCellClicked={cellClickedListener}
              rowData={rowData} // row data
              columnDefs={columnDefs} // defining columns data
              defaultColDef={defaultColDefs} // for applying filter to all cols
              enableRangeSelection={true}
              animateRows={true}
              enableCharts={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aggrid2;
