import React from 'react';
import TokenGrid from '../components/TokenGrid';
import './App.css';

/*
Extend:

1. Storybook knobs
2. Unit tests:  tape, enzyme, sinon
3. SASS/Less Preprocessor

*/

function App() {
    
  const tempClicker = columnNumber => { //todo: temp
    debugger;
    console.log('columnNumber=', columnNumber);
  }

  return (
    <div className="App">
      <h1>foo you</h1>
      <TokenGrid
        onClick={tempClicker}
      />
    </div>
  );
}

export default App;
