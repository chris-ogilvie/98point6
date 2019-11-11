import React from 'react';
import TokenContainer from '../components/TokenContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TokenContainer />
    </div>
  );
}

export default App;

/*
Extend:

1. Storybook knobs
2. Unit tests:  tape, enzyme, sinon
3. SASS/Less Preprocessor


*/