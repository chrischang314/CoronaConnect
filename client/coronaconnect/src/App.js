import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// component imports
import HomePageComponent from "./components/homepage.component"
import InputComponent from "./components/input.component"
import DataComponent from "./components/data.component"


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePageComponent}/>
        <Route exact path="/input" component={InputComponent} />
        <Route exact path="/data" component={DataComponent}/>
      </div>
    </Router>
  );
}

export default App;
