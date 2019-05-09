import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Main className="main"/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
