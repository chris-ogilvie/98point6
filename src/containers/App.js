import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getMove,
  setMove,
  setGameOver,
  setUserPlayerNumber,
  resetGrid,
} from '../Actions/GameActions';
import TokenGrid from '../components/TokenGrid';
import GameOver from '../components/GameOver';
import PropTypes from 'prop-types';
import {
  isMoveValid,
  getGameStatus
} from '../Utilities/HelperFunctions';
import {
  GAME_STATUS_AWAITING,
  GAME_STATUS_IN_PROGRESS,
} from '../Utilities/Constants';
import './App.css';

/*
Possible improvements:
1. Unit tests:  tape, enzyme, sinon
2. SASS/Less Preprocessor
3. Storybook knobs
4. Lack of browser support for fetch() in older browsers, change to use XMLHttpRequest or ensure polyfills in place
5. Destructure props

Features:
1. Storybook
2. Supports square grids of different sizes

*/
const propTypes = {
  getMove: PropTypes.func.isRequired,
  moveHistory: PropTypes.arrayOf(PropTypes.number).isRequired,
  setMove: PropTypes.func.isRequired,
  resetGrid: PropTypes.func.isRequired,
  userPlayerNumber: PropTypes.number.isRequired,
};

const defaultProps = {
  getMove: () => {},
  moveHistory: [],
  setMove: () => {},
  resetGrid: () => {},
  userPlayerNumber: 1,
};

class App extends React.Component {
    
  onColumnClick = columnNumber => {
    const { gameStatus } = this.props;
    
    if ((gameStatus === GAME_STATUS_AWAITING || 
      gameStatus === GAME_STATUS_IN_PROGRESS) && 
      isMoveValid(this.props.moveHistory, columnNumber)) {
      const moves = [...this.props.moveHistory, columnNumber];

      //first, set the human player's move
      this.props.setMove(columnNumber);

      //second, set the computer's move
      this.props.getMove(moves);
    }
  }
  
  componentDidMount() {
    // this.props.getMove(); //todo: move this
  }

  
  resetGrid = () => {
    this.props.resetGrid();
  }

  componentDidUpdate(prevProps) {
    const { moveHistory = [], userPlayerNumber, } = this.props;

    if (prevProps.moveHistory !== moveHistory) {
      const gameStatus = getGameStatus(moveHistory, userPlayerNumber);
      if (gameStatus !== GAME_STATUS_IN_PROGRESS) {
        this.props.setGameOver(gameStatus);
        return true;
      }
    }
  }

  render() {
    const { gameStatus } = this.props;
    return (
      <div className="App">
        <h2>Token Grid</h2>
        <div className="GridWrapper">
          <TokenGrid
            moveHistory={this.props.moveHistory}
            onClick={this.onColumnClick}
          />
        </div>
        {
          gameStatus !== GAME_STATUS_IN_PROGRESS && gameStatus !== GAME_STATUS_AWAITING ?
            <GameOver
              gameStatus={this.props.gameStatus}
              resetGrid={this.resetGrid}
            />
            : null
        }
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
App.displayName = 'DropTokenApp';

const mapStateToProps = (state, props) => ({
  moveHistory: state.GameReducer.moveHistory,
  gameStatus: state.GameReducer.gameStatus,
  userPlayerNumber: state.GameReducer.userPlayerNumber,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
      {
        getMove,
        setMove,
        setGameOver,
        setUserPlayerNumber,
        resetGrid,
      },
      dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);