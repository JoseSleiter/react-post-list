import postReducer from "./reducers/postReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  postReducer,
});

export default rootReducer;
