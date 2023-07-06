import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<News pagesize={12} key='general'  country="in" category="general" />} />
            <Route path='/technology' element={<News pagesize={12} key='technology' country="in" category="technology" />} />
            <Route path='/entertainment' element={<News pagesize={12} key='entertainment' country="in" category="entertainment" />} />
            <Route path='/health' element={<News pagesize={12} key='health' country="in" category="health" />} />
            <Route path='/sports' element={<News pagesize={12} key='sports' country="in" category="sports" />} />
            <Route path='/science' element={<News pagesize={12} key='science' country="in" category="science" />} />
            <Route path='/business' element={<News pagesize={12} key='science' country="in" category="business" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
