import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News pageSize={9} country="in"category="general" />} />
            <Route exact path="/business" element={<News pageSize={9} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={9} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News pageSize={9} country="in" category="health" />} />
            <Route exact path="/science" element={<News pageSize={9} country="in" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={9} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={9} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
