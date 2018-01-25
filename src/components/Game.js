import React from 'react';
import Board from './Board';
/**
 *  GAME Component contains the Boards.
 *  It holds the state to initialize the two boards.
 */


export default class Game extends React.Component {
    constructor(props) {
      super(props);
      /**
       *  State of Game Component
       */
      this.state = {
        sizeOfBoard: 5,
        player: ['Player1', 'Player2'],
        board: ['board1', 'board2'],
        turn: ['turn1', 'turn2'],
        start: false,
        checkForHits: {
          Player1: {
            one: [],
            two: []
            //three: ["21", "22", "23"]
          },
          Player2: {
            one: [],
            two: []
            //three: ["21", "22", "23"]
          }
        }
      }
    }

    /**
     *  This function returns a random co-ordinate in the Grid.
     */
    returnRandomCoordinates() {
      let a, b;
      a = Math.round(Math.random() * 4);
      b = Math.round(Math.random() * 4);
      return [a, b];
    }

    /**
     *  Converts the passed co-ordinate to String.
     */
    convertToString(a, b) {
      return a + '' + b;
    }

    /**
     *  randomize() generates the co-ordinates of 1-cell ship and 2-cell ship.
     */
    randomize() {
      let arr = [];
      let one, str_two_0, str_two_1, two_0;

      // Co-ordintes of 1-cell ship.
      one = this.returnRandomCoordinates();
      one = this.convertToString(one[0], one[1]);
      arr.push(one);

      // Co-ordinates of 2-cell ship.
      two_0 = this.returnRandomCoordinates();
      str_two_0 = this.convertToString(two_0[0], two_0[1]);
      while (arr.includes(str_two_0)) {
        two_0 = this.returnRandomCoordinates();
        str_two_0 = this.convertToString(two_0[0], two_0[1]);
      }
      arr.push(str_two_0);
      if (two_0[1] < 4 && !arr.includes(this.convertToString(two_0[0], two_0[1] + 1))) {
        str_two_1 = this.convertToString(two_0[0], two_0[1] + 1);
      } else if (two_0[1] > 0 && !arr.includes(this.convertToString(two_0[0], two_0[1] - 1))) {
        str_two_1 = this.convertToString(two_0[0], two_0[1] - 1);
      } else if (two_0[0] > 0 && !arr.includes(this.convertToString(two_0[0] - 1, two_0[1]))) {
        str_two_1 = this.convertToString(two_0[0] - 1, two_0[1]);
      } else if (two_0[1] < 4 && !arr.includes(this.convertToString(two_0[0] + 1, two_0[1]))) {
        str_two_1 = this.convertToString(two_0[0] + 1, two_0[1]);
      }
      arr.push(str_two_1);
      return arr;
    }

    /**
     *  Populates the state by updating 'checkForHits' with the co-ordinates of 1-cell ship and 2-cell ship, of both the Players.
     */
    placeShips() {
      let a = [];
      let b = [];
      document.querySelector('.start').style.display = 'none';
      a = this.randomize();
      b = this.randomize();
      this.setState({
        start: true,
        checkForHits: {
          Player1: {
            one: [a[0]],
            two: [a[1], a[2]]
            //          three: ["21","22","23"]
          },
          Player2: {
            one: [b[0]],
            two: [b[1], b[2]]
            //          three: ["21","22","23"]
          }
        }
      })
    }

    render() {
        return (
          <div className = "game" >
          <div className = "input" >
          <button className = 'start'onClick = {() => this.placeShips()}> START</button>
          </div >
          {this.state.start ?
            (
              <div className = "game-board" >
              <Board id = {this.state.board[0]} playerChance = {this.state.turn[0]} checkForHits = {this.state.checkForHits} player = {this.state.player[0]} />
              <Board id = {this.state.board[1]} playerChance = {this.state.turn[1]} checkForHits = {this.state.checkForHits} player = {this.state.player[1]} />
              </div >
            ) : null
          }
          </div>
        );
      }
    }
