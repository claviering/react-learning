import React, { Component } from 'react';
import './App.scss';
import Head from '@/components/Head/Head.jsx';
import Main from '@/components/Main/Main.jsx';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Head></Head>
        <Main store={ this.props.store}></Main>
      </div>
    );
  }
}

export default App;
