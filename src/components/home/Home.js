import React, { Component } from 'react';
import Container from './Container';
import Loader from '../commons/Loader';

function heyAsynCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 2500));
}

export class Home extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    heyAsynCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="wrapper">
        {/* cek */}
        {loading ? <Loader /> : <Container />}
      </div>
    );
  }
}

export default Home;
