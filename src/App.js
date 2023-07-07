import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize=8;
  apiKey=process.env.REACT_APP_NEWS_APIKEY
    
  state={
      progress:10
    }
  

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Routes>
            <Route path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='general'  country="in" category="general" />} />
            <Route path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='technology' country="in" category="technology" />} />
            <Route path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='entertainment' country="in" category="entertainment" />} />
            <Route path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='health' country="in" category="health" />} />
            <Route path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='sports' country="in" category="sports" />} />
            <Route path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='science' country="in" category="science" />} />
            <Route path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={this.state.pagesize} key='science' country="in" category="business" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
