import React, { Component } from 'react';
import './App.scss';
import Head from '@/components/Head/Head.jsx';
import Main from '@/components/Main/Main.jsx';

class App extends Component {
  componentDidMount () {
    console.log(this.props.store.getState())
  }
  render() {
    return (
      <div className="App container">
        <Head></Head>
        <Main></Main>
      </div>
    );
  }
}

export default App;
