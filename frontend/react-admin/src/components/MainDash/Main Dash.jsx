import React from "react";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
// import Cards from "../Cards/Cards";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      
      <div className="widgets">
            <Widget type="event" />
            <Widget type="upcoming" />
            <Widget type="mail" />
      </div>      
     
      <Table />
    </div>
  );
};

export default MainDash;