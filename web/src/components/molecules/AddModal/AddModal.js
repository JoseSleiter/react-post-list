import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddCircle from "@material-ui/icons/AddCircleOutline";
import PostForm from "../PostForm/PostForm";

import { useDispatch } from "react-redux";
import { fetchResetForm } from "../../../store/actions/postActions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddModal = () => {
  const dispatch = useDispatch();
  const initValue = { title: "", description: "" };
  const [state, setstate] = React.useState(initValue);

  const handleChange = (input) => {
    setstate({ ...state, [input.name]: input.value });
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setstate(initValue);
    fetchResetForm(dispatch);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        aria-label="update"
        className=""
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddCircle />}
        style={{ marginBottom: 20, marginLeft: 16, color: "white" }}
      >
        Add Posts
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id={`transition-modal-title-add`}>Add new post </h2>
          <div id={`transition-modal-description-add`}>
            <PostForm
              data={state}
              hiddenModal={handleClose}
              handleInputChange={handleChange}
            >
              <Button
                onClick={handleClose}
                variant="contained"
                color="default"
                size="small"
              >
                Cancel
              </Button>
            </PostForm>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;
