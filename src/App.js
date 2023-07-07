import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const pageSize =8
  const apiKey = process.env.REACT_APP_NEWS_APIKEY
  
  const [progress, setProgress] = useState(10)
  const [mode, setMode]=useState("light")

  const toggleMode=()=>{
    if(mode=="light"){
      document.body.style.backgroundColor="#191919"
      setMode("dark")
    }
    else{
      document.body.style.backgroundColor="white"
      setMode("light")
    }
  }

  return (
    <Router>
      <div>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='general' country="in" category="general" />} />
          <Route path='/technology' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='technology' country="in" category="technology" />} />
          <Route path='/entertainment' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='entertainment' country="in" category="entertainment" />} />
          <Route path='/health' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='health' country="in" category="health" />} />
          <Route path='/sports' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='sports' country="in" category="sports" />} />
          <Route path='/science' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='science' country="in" category="science" />} />
          <Route path='/business' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key='science' country="in" category="business" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App