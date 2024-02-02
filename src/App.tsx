import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Pets from "./components/Pets/Pets";
import Contacts from "./components/Contacts/Contacts";
import Login from "./components/Login/Login";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
          </div>
        <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/pets" Component={Pets} />
            <Route path="/contacts" Component={Contacts} />
            <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
