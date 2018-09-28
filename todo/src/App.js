import React, { Component } from 'react';
import './App.scss';
import Head from '@/components/Head/Head.jsx';
import Add from '@/components/Add/Add.jsx';
import Main from '@/components/Main/Main.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Head></Head>
        <Main></Main>
        <div className="addTodo">
          <Add></Add>
        </div>
      </div>
    );
  }
}

export default App;
