import React from 'react';
import Square from './Square';
/**
 *  Board Component contains the whole 'winner evaluation' state.
 *  It evaluates the 'Winner' and updates the state to update the UI.
 */

// Global 'toggleTurn' is used to toggle the playing turns of each player.
let toggleTurn = true;

export default class Board extends React.Component {
  constructor(props){
    super(props);

    /**
     *  State of Each Board Component
     */
    this.state ={
      squares: [[null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,null,null,null]
              ],
      checkForHits: props.checkForHits,
      sunk: null,
      count1:[0,0,0],
      count2:[0,0,0],
      winner: null
    };
  }

  /**
   *  Checks if the ships have been sunk.
   */
  sunkCheck(player, pos){
    let a,b,c,player_num, player1Or2, xy, x, y;

    xy = pos.split("");
    x = parseInt(xy[0],10);
    y = parseInt(xy[1],10);

    if(player === 'Player1')
    {
      player_num = this.state.checkForHits.Player1;
      player1Or2 = 1;
    }else{
      player_num = this.state.checkForHits.Player2;
      player1Or2 = 2;
    }

      if(player_num.one.includes(pos))
      {
        if(player1Or2 === 1){
          this.setState({count1: [1,this.state.count1[1],this.state.count1[2]],
                         sunk: 'SUNK'
                       })
        }else{
          this.setState({count2: [1,this.state.count2[1],this.state.count2[2]],
            sunk: 'SUNK'
          })
        }
      }
      if(player_num.two.includes(pos))
      {
        if(pos === player_num.two[0]){
           a = player_num.two[1].split("");
           b = parseInt(a[0],10);
           c = parseInt(a[1],10);
        }else{
           a = player_num.two[0].split("");
           b = parseInt(a[0],10);
           c = parseInt(a[1],10);
        }

        if(this.state.squares[x][y] ==='X' && this.state.squares[b][c] === 'X')
        {
          if(player1Or2 === 1){
            this.setState({count1: [this.state.count1[0],1,this.state.count1[2]],
                           sunk: 'SUNK'
                         })
          }else{
            this.setState({count2: [this.state.count2[0],1,this.state.count2[2]],
              sunk: 'SUNK'
            })
          }
        }
      }
    }
                          /* 3-SIZE BATTLESHIP TESTING CODE
                                  if(player_num.three.includes(pos)){
                                    if(pos === player_num.three[0]){
                                       a = player_num.three[1].split("");
                                       b = parseInt(a[0],10);
                                       c = parseInt(a[1],10);
                                       d = player_num.three[2].split("");
                                       e = parseInt(d[0],10);
                                       f = parseInt(d[1],10);
                                    }else if(pos === player_num.three[1]){
                                       a = player_num.three[0].split("");
                                       b = parseInt(a[0],10);
                                       c = parseInt(a[1],10);
                                       d = player_num.three[2].split("");
                                       e = parseInt(d[0],10);
                                       f = parseInt(d[1],10);
                                    }else{
                                       a = player_num.three[0].split("");
                                       b = parseInt(a[0],10);
                                       c = parseInt(a[1],10);
                                       d = player_num.three[1].split("");
                                       e = parseInt(d[0],10);
                                       f = parseInt(d[1],10);
                                    }


                                    if(this.state.squares[x][y] ==='X' && this.state.squares[b][c] === 'X' && this.state.squares[e][f] === 'X'){
                                      if(player1Or2 === 1){
                                        this.setState({count1: [this.state.count1[0],this.state.count1[1],1],
                                                       sunk: 'SUNK'
                                                     })
                                      }else{
                                        this.setState({count2: [this.state.count2[0],this.state.count2[1],1],
                                          sunk: 'SUNK'
                                        })
                                      }
                                    }
                                  }
                            */

  /**
   *  Updates the state(updating the UI) after the 'Winner' is declared.
   */
  end(player){
      document.getElementById('board1').style.display = 'none';
      document.getElementById('board2').style.display = 'none';
      document.querySelector('.game-info').style.display = 'none';
    this.setState({
      sunk: null,
      count1:[0,0,0],
      count2:[0,0,0],
      squares: [[null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,null,null,null],
                [null,null,null,null,null]
              ]
    });
  }

  /**
   *  Checks if the encounter was a HIT(indicated by 'X') or MISS(indicated by 'M')
   */
  checkForHits(player, pos){
    if(player === 'Player1')
    {
      if((this.state.checkForHits.Player1.one.includes(pos)) || (this.state.checkForHits.Player1.two.includes(pos)))
      {
        // || (this.state.checkForHits.Player1.three.includes(pos))){
        this.setState({sunk: 'HIT'});
        return true;
      }else{
        this.setState({sunk: 'MISS'});
        return false;
      }
    }else{
      if((this.state.checkForHits.Player2.one.includes(pos)) || (this.state.checkForHits.Player2.two.includes(pos)))
      {
      //|| (this.state.checkForHits.Player2.three.includes(pos))){
        this.setState({sunk: 'HIT'});
        return true;
      }else{
        this.setState({sunk: 'MISS'});
        return false;
      }
    }
  }

  /**
   *  Evaluates the status of a Click on each players grid respectively.
   */
  handleClick(player, pos){
    const sq = this.state.squares;
    let xy, x, y;
    xy = pos.split("");
    x = parseInt(xy[0],10);
    y = parseInt(xy[1],10);
    if(toggleTurn)
    {
      document.getElementById('board1').style.display = 'none';
      document.getElementById('board2').style.display = 'block';
      //this.setState({toggleTurn : !this.state.toggleTurn});
      toggleTurn = !toggleTurn;
      document.querySelector(".turn1").style.display = 'block';
      document.querySelector(".turn2").style.display = 'none';
    }else{
      document.getElementById('board2').style.display = 'none';
      document.getElementById('board1').style.display = 'block';
      //this.setState({toggleTurn : !this.state.toggleTurn});
      toggleTurn = !toggleTurn;
      document.querySelector(".turn2").style.display = 'block';
      document.querySelector(".turn1").style.display = 'none';
    }

    if((this.state.count1[0] >= 1 && this.state.count1[1] >= 1 /*&& this.state.count1[2] >= 1*/ ) ||  (this.state.count2[0] >= 1 && this.state.count2[1] >= 1 /*&& this.state.count2[2] >= 1)*/))
    {
      this.setState({winner: 'Winner'});
      this.end(player);
    }else{
      if(this.checkForHits(player,pos))
      {
        sq[x][y] = 'X';
        this.sunkCheck(player, pos);
        this.setState(()=>{
           return{squares:sq}
        });
      }else{
        sq[x][y] = 'M';
        this.sunkCheck(player, pos);
        this.setState(()=>{
           return{squares:sq}
        });
      }
    }
  }

  /**
   *  Renders the squares required to form a Grid.
   */
  renderSquare(pos) {
    let xy, x, y;
    xy = pos.split("");
    x = parseInt(xy[0],10);
    y = parseInt(xy[1],10);

    return (
      <Square
        value={this.state.squares[x][y]}
        onClick = {() =>this.handleClick(this.props.player, pos)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">{this.props.player} {this.state.winner}</div>
        <div className="game-info">
          <div>{this.state.sunk}</div>
          <p/>
        {this.props.playerChance === "turn1" ? (
          <div className={this.props.playerChance}>
            <p>"PLAYER 2's turn."</p>
          </div>
        ) : (
          <div className={this.props.playerChance}>
            <p>"PLAYER 1's turn."</p>
          </div>
        )
      }
      </div>

      <div id= {this.props.id}>
        <div className="board-row">
          {this.renderSquare("00")}
          {this.renderSquare("01")}
          {this.renderSquare("02")}
          {this.renderSquare("03")}
          {this.renderSquare("04")}
        </div>
        <div className="board-row">
          {this.renderSquare("10")}
          {this.renderSquare("11")}
          {this.renderSquare("12")}
          {this.renderSquare("13")}
          {this.renderSquare("14")}
        </div>
        <div className="board-row">
          {this.renderSquare("20")}
          {this.renderSquare("21")}
          {this.renderSquare("22")}
          {this.renderSquare("23")}
          {this.renderSquare("24")}
        </div>
        <div className="board-row">
          {this.renderSquare("30")}
          {this.renderSquare("31")}
          {this.renderSquare("32")}
          {this.renderSquare("33")}
          {this.renderSquare("34")}
        </div>
        <div className="board-row">
          {this.renderSquare("40")}
          {this.renderSquare("41")}
          {this.renderSquare("42")}
          {this.renderSquare("43")}
          {this.renderSquare("44")}
        </div>

        </div>
      </div>
    );
  }
}
