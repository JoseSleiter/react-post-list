import { handleErrors } from "../../utils/middleware/handleErrors";

// Action Creators

// const updatePost = (payload) => ({ type: "UPDATE_POST", payload });

const showModal = () => ({ type: "SHOW_MODAL" });

const showLoading = () => ({ type: "SHOW_LOADING" });

const addPost = (payload) => ({ type: "ADD_POST", payload });

const updatePosts = (payload) => ({ type: "LOAD_POSTS", payload });

const removePost = (payload) => ({ type: "REMOVE_POST", payload });

const showPost = (payload) => ({ type: "SHOW_POST", payload });

const resetPost = () => ({ type: "RESET_POST" });

// Methods
export const fetchAllPosts = () => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:3001/api/v1/post/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let { data } = await handleErrors(response);
    dispatch(updatePosts(data.posts));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCreatePost = (postInfo) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:3001/api/v1/post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postInfo),
    });
    let { data } = await handleErrors(response);
    dispatch(addPost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchUpdatePost = (postInfo) => async (dispatch) => {
  try {
    let response = await fetch(
      `http://localhost:3001/api/v1/post/${postInfo.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(postInfo),
      }
    );
    await handleErrors(response);
    await dispatch(fetchAllPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchShowPost = (id) => async (dispatch) => {
  try {
    dispatch(showLoading());
    let response = await fetch(`http://localhost:3001/api/v1/post/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let { data } = await handleErrors(response);
    dispatch(showPost(data.post));
    dispatch(showLoading());
    dispatch(showModal());
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDeletePost = (id) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:3001/api/v1/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    await handleErrors(response);
    dispatch(removePost(id));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchFilterPosts = (query) => async (dispatch) => {
  try {
    let response = await fetch(
      "http://localhost:3001/api/v1/post/search/" + query
    );
    let { data } = await handleErrors(response);
    dispatch(updatePosts(data.posts));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchResetForm = (dispatch) => {
  dispatch(resetPost());
};

export const fetchShowModal = () => (dispatch) => {
  dispatch(showModal());
};
