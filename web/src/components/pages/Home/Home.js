import React from "react";
import BodyTable from "./../../organisms/BodyTable/BodyTable";
import HeaderTable from "./../../organisms/HeaderTable/HeaderTable";

const Home = () => {
  return (
    <div className="table-posts">
      <HeaderTable />
      <BodyTable />
    </div>
  );
};

export default Home;
