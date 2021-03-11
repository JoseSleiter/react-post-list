import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { fetchDeletePost } from "./../../../store/actions/postActions";

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

const DeleteModal = ({ id, children }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    dispatch(fetchDeletePost(id));
  };

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="delete" className="">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id={`transition-modal-title-delete${id}`}>ARE YOU SURE ? {id}</h2>
          <p id={`transition-modal-description-delete${id}`}>
            You are about to delete this post
          </p>
          <div className="actions-btn">
            <Button
              onClick={handleClose}
              variant="contained"
              color="default"
              size="small"
              style={{ marginBottom: 5 }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="primary"
              size="small"
              style={{ marginBottom: 5, marginLeft: 20, color: "white" }}
            >
              Yes, Continue
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
