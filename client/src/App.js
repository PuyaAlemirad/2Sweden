import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
