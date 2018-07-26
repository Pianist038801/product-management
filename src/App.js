import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login'
import Main from './pages/main'
import AddPage from './pages/addPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/add" component={AddPage} />
        </div>
      </Router>
    );
  }
}

export default App;
