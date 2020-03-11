import React, { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import EditLogModel from './components/logs/EditLogModel';
import About from './components/about/About';

import { Provider } from 'react-redux';
import store from './redux/store';

const  App = props => {

  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <SearchBar />
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <div className="container">
                <Logs />
                <AddBtn />
              </div>
            </Fragment>
          )}/>
          <Route exact path='/edit-log-modal' component={EditLogModel} /> 
          <Route exact path='/about' component={About} /> 
        </Switch>        
      </div>
    </Router>
    </Provider>
  );
}

export default App;
