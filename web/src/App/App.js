import React, { useEffect } from "react";

import Home from "../components/pages/Home/Home";
// import logo from "./../assets/img/logo.svg";

import { useDispatch } from "react-redux";
import { fetchAllPosts } from "./../store/actions/postActions";
import Theme from "../components/Theme/Theme";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  });

  return (
    <div className="App">
      <Theme>
        <header className="App-header"></header>
        <Home />
      </Theme>
    </div>
  );
}

export default App;
