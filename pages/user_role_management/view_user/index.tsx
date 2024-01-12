import React, { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";

// Icons
import { FaRegTrashAlt } from "react-icons/fa";

const View_User = () => {
	// Row Data: The data to be display ed.
	const [rowData, setRowData] = useState([
		{
			UserName: "Deleted username",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Inactive",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Inactive",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Inactive",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Inactive",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Inactive",
		},
		{
			UserName: "Janet",
			DateCreated: "12 Aug 2022 - 12:25 am",
			Role: "HR Manager",
			Status: "Active",
		},
	]);

	const handleDelete = useCallback((item: { data: { UserName: string } }) => {
		let data = rowData;
		data = data.filter((d) => d.UserName !== item?.data?.UserName);
		setRowData(data);
	}, []);

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{
			field: "UserName",
			flex: 1,
			headerName: "User Name",
			headerClass: "text-lg text-gray-600",
			cellClass: "text-gray-500",
		},
		{
			field: "DateCreated",
			flex: 1,
			headerName: "Date Created",
			headerClass: "text-lg text-gray-600",
			cellClass: "text-gray-500",
		},
		{
			field: "Role",
			flex: 1,
			headerName: "Role",
			headerClass: "text-lg text-gray-600",
			cellClass: "text-gray-500",
		},
		{
			field: "Status",
			flex: 1,
			headerName: "Status",
			headerClass: "text-lg text-gray-600",
			cellRenderer: (item: { data: { Status: string } }) => {
				if (item.data.Status === "Active") {
					return (
						<span className=" rounded-xl border border-green-500 px-2 py-1 bg-green-100 text-green-500">
							Active
						</span>
					);
				} else {
					return (
						<span className=" rounded-xl border border-red-500 px-2 py-2 bg-red-100 text-red-500">
							Inactive
						</span>
					);
				}
			},
		},

		{
			field: "action",
			flex: 1,
			headerName: "Action",
			headerClass: "text-lg text-gray-600",
			cellClass: "text-gray-500",

			cellRenderer: (item: { onClick: (item: any) => void }) => {
				return (
					<div className="text-red-500">
						<FaRegTrashAlt
							onClick={() => item?.onClick(item)}
							className="cursor-pointer"
						/>
					</div>
				);
			},
			cellRendererParams: {
				onClick: handleDelete,
				label: "Delete",
			},
		},
	]);

	const defaultColDefs = useMemo(
		() => ({
			sortable: true,
			filter: true,
			suppressSizeToFit: true,
		}),
		[]
	);
	return (
		<div className="mx-5 my-5">
			<div className="text-2xl mb-5">User List</div>
			<div
				className="ag-theme-quartz"
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: 700,
				}}
			>
				<AgGridReact
					defaultColDef={defaultColDefs}
					rowData={rowData}
					columnDefs={colDefs}
					pagination={true}
					paginationPageSize={20}
					rowSelection={"multiple"}
					suppressRowClickSelection={true}
					groupSelectsChildren={true}
				/>
			</div>
		</div>
	);
};

export default View_User;
