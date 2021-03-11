import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import PostForm from "./../PostForm/PostForm";

import { useDispatch, useSelector } from "react-redux";
import { fetchShowModal } from "./../../../store/actions/postActions";

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

const CustomModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postReducer = useSelector((state) => state.postReducer);
  const [state, setstate] = React.useState({});

  React.useEffect(() => {
    setstate(postReducer.post);
  }, [postReducer.post]);

  const handleClose = () => {
    dispatch(fetchShowModal());
  };

  const handleChange = (input) => {
    setstate({ ...state, [input.name]: input.value });
  };

  if (postReducer.loading) {
    return <p>Cargando...</p>;
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={postReducer.showModal}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2 id={`transition-modal-title-update`}>
          Update post {postReducer.post.id}
        </h2>
        <div id={`transition-modal-description-update`}>
          <PostForm
            data={state}
            type="UPDATE"
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
  );
};

export default CustomModal;
