const defaultState = {
  loading: false,
  showModal: false,
  posts: [],
  post: {},
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return {
        ...state,
        posts: [...action.payload],
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };
    case "SHOW_POST":
      return {
        ...state,
        post: { ...action.payload },
      };
    case "RESET_POST":
      return {
        ...state,
        post: {},
      };

    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    case "SHOW_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };

    case "SHOW_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    // case "UPDATE_POST":
    // return {
    //   ...state,
    //   post: { ...action.payload },
    // };
    default:
      return state;
  }
};

export default postReducer;
