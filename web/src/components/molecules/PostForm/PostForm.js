import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  fetchUpdatePost,
  fetchCreatePost,
} from "./../../../store/actions/postActions";

const PostForm = ({ data, type, hiddenModal, handleInputChange, children }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    handleInputChange(e.target);
  };

  const sendData = () => {
    if (type === "UPDATE") {
      dispatch(fetchUpdatePost(data));
      hiddenModal();
      return;
    }
    dispatch(fetchCreatePost(data));
    hiddenModal();
  };

  return (
    <div>
      <form className={"classes.root"} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              onChange={handleChange}
              value={data.title}
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              onChange={handleChange}
              value={data.description}
              multiline
              rows={4}
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </Grid>
          <Grid item xs={12} className="flex-section flex-btw">
            {children}
            <Button
              onClick={sendData}
              variant="contained"
              color="primary"
              size="small"
              style={{ color: "white" }}
              className={"classes.button"}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PostForm;
