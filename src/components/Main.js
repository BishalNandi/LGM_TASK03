import React, {useState } from "react";
import Content from "./Content";
import Form from "./Form";
import "../styles/Main.css"
const Main = () => {
  const[userdata,setAlldata]=useState([]);
  return (
  <div className="content">
       <div className="row">
      <div className="col-5 offset-1">
        <Form setAlldata={setAlldata}/>
      </div>
      <div className="col-1">
          <div className="line">
          </div>
      </div>
      <div className="col-4">
        <Content userdata={userdata} />
      </div>
    </div>
  </div>
  );
};

export default Main;
