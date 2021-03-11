import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { fetchShowPost } from "../../../store/actions/postActions";
import { useDispatch } from "react-redux";

const UpdateButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleOpen = async () => {
    dispatch(fetchShowPost(id));
  };

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="update" className="">
        <EditIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default UpdateButton;
