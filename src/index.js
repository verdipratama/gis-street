import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../src/components/layout/Navigation';
import Home from './components/home/Home';

import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/now-ui-kit.css';
import '../src/assets/css/index.css';

import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Navigation />
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
