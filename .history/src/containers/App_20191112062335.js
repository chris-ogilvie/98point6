import React from 'react';
import TokenGrid from '../components/TokenGrid';
import './App.css';

/*
Extend:

1. Storybook knobs
2. Unit tests:  tape, enzyme, sinon
3. SASS/Less Preprocessor

*/

class App extends React.Component {
    
  const tempClicker = columnNumber => {
    console.log('columnNumber=', columnNumber);
  }

  const gridValues=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2]; //todo: temp

  return (
    <div className="App">
      <h1>foo you</h1>
      <TokenGrid
        gridValues={gridValues}
        onClick={tempClicker}
      />
    </div>
  );
}

export default App;
