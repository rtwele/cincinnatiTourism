import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Page & Component Imports
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import NotFound from './pages/NotFound';
import AddAttraction from './pages/AddAttraction'
import Art from './pages/Art'
import Sport from './pages/Sport'


// styles
import './styles/App.css';
import './styles/homePage.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/addattraction' component={AddAttraction} />
        <Route path='/Art' component={Art} />
        <Route path='/Sport' component={Sport} />

        {/* <Route component={NotFound}/> */}
      </Router>
    </div>
  );
}
}

