import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const events = require("./tools/Events.json");


function App() {
  // console.log(Object.entries(events).flatMap(e => e[1].events));
  return (
    <div className="container-fluid">

      <div className="row">
          <div className="col-lg col-md col-sm"><Header/></div>
          </div>

      {/* <div className="row">
      <div className="col-lg col-md col-sm"><Navbar/></div>
      </div> */}

    <div className="row">
      <div className="col-lg col-md col-sm"><Main/></div>
    </div>


    <div className="row">
    <div className="col-lg col-md col-sm"><Footer/></div>
    </div>
    </div>
  );
}

export default App;
