import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TokenGrid from '../components/TokenGrid';
import PropTypes from 'prop-types';
import './App.css';

/*
Possible improvements:
1. Unit tests:  tape, enzyme, sinon
2. SASS/Less Preprocessor
3. Storybook knobs
4. Lack of browser support for fetch() in older browsers, change to use XMLHttpRequest or ensure polyfills in place

*/
const propTypes = { //todo: add these
  gridValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  // onClick: PropTypes.func.isRequired,
};

const defaultProps = { //todo: add these
  gridValues: [],
  // onClick: () => {},
};

class App extends React.Component {
    
  tempClicker = columnNumber => { //todo: temp
    console.log('columnNumber=', columnNumber);
  }

  gridValues=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2]; //todo: temp

  render() {

    return (
      <div className="App">
        <h1>foo you</h1>
        <TokenGrid
          gridValues={this.gridValues}
          onClick={this.tempClicker}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
App.displayName = 'DropTokenApp';

const mapStateToProps = (state, props) => ({
  // authentication: state.checkoutReducer.authentication,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
      {
          // acknowledgeChangeAddress,
      },
      dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);