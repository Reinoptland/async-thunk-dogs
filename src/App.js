import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import  { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import DogList from './Doglist'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <nav>
                <h1>Navigation:</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dogs/">SHOW DOGS! WOOF</Link>
                  </li>
                </ul>
              </nav>

              <h1>Component</h1>
              <Route path="/" exact component={Home} />
              <Route path="/dogs/" component={DogList} />
            </div>
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
