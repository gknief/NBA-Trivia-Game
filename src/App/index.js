import React, { Component } from "react";
import "./style.css";
import HeaderContent from "../HeaderContent";
import PlayerContent from "../PlayerContent";

const nba = require("nba");

const style1 = {
  color: 'rgb(0, 255, 0)'
  // color: 'green'
}

const style2 = {
  color: 'rgb(255, 0, 0)'
  // color: 'red'
}
  
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       players: [
        { 
          'name': 'LeBron James',
          'id': 2544
        },
        { 
          'name': 'Kevin Durant',
          'id': 201142
        },
        { 
          'name': 'Stephen Curry',
          'id': 201939
        },
        { 
          'name': 'James Harden',
          'id': 201935
        },
        { 
          'name': 'Kawhi Leonard',
          'id': 202695
        },
        { 
          'name': 'Giannis Antetokounmpo',
          'id': 203507
        },
        { 
          'name': 'Carmelo Anthony',
          'id': 2546
        },
        { 
          'name': 'Chris Paul',
          'id': 101108
        },
        {
          'name': 'Anthony Davis',
          'id': 203076
        },
        {
          'name': 'DeMar DeRozan',
          'id': 201942
        },
        {
          'name': 'Kyrie Irving',
          'id': 202681
        },
        {
          'name': 'Russell Westbrook',
          'id': 201566
        },
        {
          'name': 'DeMarcus Cousins',
          'id': 202326
        },
        {
          'name': 'Klay Thompson',
          'id': 202691
        },
        {
          'name': 'Karl-Anthony Towns',
          'id': 1626157
        },
        {
          'name': 'Kevin Love',
          'id': 201567
        },
        {
          'name': 'Kyle Lowry',
          'id': 200768
        },
        {
          'name': 'DeAndre Jordan',
          'id': 201599
        },
        {
          'name': 'Nikola Jokic',
          'id': 203999
        },
        {
          'name': 'Dwight Howard',
          'id': 2730
        },
        {
          'name': 'Kristaps Porzingis',
          'id': 204001
        },
        {
          'name': 'Ben Simmons',
          'id': 1627732
        },
        {
          'name': 'Dennis Smith Jr.',
          'id': 1628372
        },
        {
          'name': 'Donovan Mitchell',
          'id': 1628378
        },
        {
          'name': 'Jayson Tatum',
          'id': 1628369
        },
        {
          'name': 'Lonzo Ball',
          'id': 1628366
        },
        {
          'name': 'LaMarcus Aldridge',
          'id': 200746
        },
        {
          'name': 'Andre Drummond',
          'id': 203083
        },
        {
          'name': 'Joel Embiid',
          'id': 203954
        },
        {
          'name': 'Paul George',
          'id': 202331
        },
        {
          'name': 'Rudy Gobert',
          'id': 203497
        },
        {
          'name': 'Draymond Green',
          'id': 203110
        },
        {
          'name': 'Blake Griffin',
          'id': 201933
        },
        {
          'name': 'Victor Oladipo',
          'id': 203506
        },
        {
          'name': 'Dwyane Wade',
          'id': 2548
        },
        {
          'name': 'John Wall',
          'id': 202322
        },
        {
          'name': 'Kemba Walker',
          'id': 202689
        },
        {
          'name': 'Marc Gasol',
          'id': 201188
        }
       ],
       randomPlayer1: '',
       randomPlayer1ID: null,
       
       randomPlayer2: '',
       randomPlayer2ID: null,
       red: 0,
       green: 0
    }
  }
  
  randomizePlayer1 = () => {
    this.setState({ 
      randomPlayer1ID: this.state.players[Math.floor(Math.random() * 
      this.state.players.length)].id
    }, () => {
      nba.stats.playerInfo({PlayerID: this.state.randomPlayer1ID}).then((data) => {
        this.setState({
          randomPlayer1: data.commonPlayerInfo[0].displayFirstLast,
          randomPlayer1Stats: data.playerHeadlineStats[0].pts
        });
      });
    })
  }

  randomizePlayer2 = () => {
    this.setState({ 
      randomPlayer2ID: this.state.players[Math.floor(Math.random() * 
      this.state.players.length)].id
    }, () => {
      nba.stats.playerInfo({PlayerID: this.state.randomPlayer2ID}).then((data) => {
        this.setState({
          randomPlayer2: data.commonPlayerInfo[0].displayFirstLast,
          randomPlayer2Stats: data.playerHeadlineStats[0].pts
        });
      });
    })
  }

  randomizePlayers = () => {
    this.randomizePlayer1();
    this.randomizePlayer2();
  }

  checkAnswer = (e) => {
    const selectedPlayer = e.target.innerText;
    const { randomPlayer1, randomPlayer2, randomPlayer1Stats, randomPlayer2Stats } = this.state;
    if(selectedPlayer === randomPlayer1) {
        if(randomPlayer1Stats > randomPlayer2Stats) {
          // return (
          //   <div>
          //   <a className = "playerOne" href="#" onClick={this.randomizePlayers} style={style1}>{this.randomPlayer1}</a>
          //   <a className = "playerTwo" href="#" onClick={this.randomizePlayers}>{this.randomPlayer2}</a>
          //   </div>
          //   )
          // this.setState({
          //   green: 100,
          // });
          setTimeout(this.setState({
            randomPlayer1: 'Correct',
            randomPlayer2: 'Incorrect',
          }), 450)
          //  {this.turnGreen}
          //  setTimeout(e.target.style.color = 'green', 50)
        } else {
          // return (
          // <div>
          // <a className = "playerOne" href="#" onClick={this.randomizePlayers} style={style2}>{this.randomPlayer1}</a>
          // <a className = "playerTwo" href="#" onClick={this.randomizePlayers}>{this.randomPlayer2}</a>
          // </div>
          // )
          // this.setState({
          //   red: 100,
          // });
          setTimeout(this.setState({
            randomPlayer1: 'Incorrect',
            randomPlayer2: 'Correct',
          }), 450)
          // {this.turnRed}
          //  setTimeout(e.target.style.color = 'red', 50)
        }
    }
      if(selectedPlayer === randomPlayer2) {
        if(randomPlayer2Stats > randomPlayer1Stats) {
          // return (
          //   <div>
          //   <a className = "playerOne" href="#" onClick={this.randomizePlayers}>{this.randomPlayer1}</a>
          //   <a className = "playerTwo" href="#" onClick={this.randomizePlayers} style={style1}>{this.randomPlayer2}</a>
          //   </div>
          // )
          // this.setState({
          //   green: 100,
          // });
          setTimeout(this.setState({
            randomPlayer1: 'Incorrect',
            randomPlayer2: 'Correct',
          }), 450)
          //  {this.turnGreen}
          //  setTimeout(e.target.style.color = 'green', 50)
        } else {
          // return (
          //   <div>
          //   <a className = "playerOne" href="#" onClick={this.randomizePlayers}>{this.randomPlayer1}</a>
          //   <a className = "playerTwo" href="#" onClick={this.randomizePlayers} style={style2}>{this.randomPlayer2}</a>
          //   </div>
          // )
          // this.setState({
          //   red: 100,
          // });
          setTimeout(this.setState({
            randomPlayer1: 'Correct',
            randomPlayer2: 'Incorrect',
          }), 450)
          //  {this.turnRed}
          //  setTimeout(e.target.style.color = 'red', 50)
      }
    }
    setTimeout(this.randomizePlayers, 500);
  }

  
  turnRed = (red) => {
    this.setState((prevState) => 
    {
      return {
        [red]: prevState[red] + 255,
      }
    });
  }
  
  turnGreen = (green) => {
    this.setState((prevState) => 
    {
      return {
        [green]: prevState[green] + 255,
      }
    });
  }

  render() {
    return (
        <div className="container">
          <HeaderContent randomizePlayers={this.randomizePlayers}/>
          <PlayerContent checkAnswer={this.checkAnswer} randomPlayer1={this.state.randomPlayer1} randomPlayer2={this.state.randomPlayer2} turnRed={this.turnRed} turnGreen={this.turnGreen}/>
        </div>
    );
  }
}

export default App;
