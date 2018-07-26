import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Login from './pages/login'
import Main from './pages/main'
import AddPage from './pages/addPage'
import reducer from './store/reducer'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/add" component={AddPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
