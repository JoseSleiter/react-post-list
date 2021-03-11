import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";

import UpdateButton from "./../UpdateButton/UpdateButton";
import DeleteModal from "./../DeleteModal/DeleteModal";
import CustomModal from "./../CustomModal/CustomModal";
import CustomNoRowsOverlay from "../../atoms/iconNotRows/IconNotRows";

const ListPosts = () => {
  const postReducer = useSelector((state) => state.postReducer);
  const rows = postReducer.posts;
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "action",
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <strong>
          <div className="flex-section">
            <UpdateButton id={params.getValue("id") || ""}></UpdateButton>
            <DeleteModal id={params.getValue("id") || ""}></DeleteModal>
          </div>
        </strong>
      ),
      flex: 1,
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        disableColumnMenu={false}
        density="compact"
        pageSize={25}
        scrollbarSize={15}
        columns={columns}
        rows={rows}
      />
      <CustomModal></CustomModal>
    </div>
  );
};

export default ListPosts;
