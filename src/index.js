import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/now-ui-kit.css';

import { Jumbotron, Button } from 'reactstrap';

import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <div className=" mx-auto text-center">
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for calling extra
              attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typography and spacing to space content out within the
              larger container.
            </p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
