import React, { Component } from "react";
import "./style.css";
import HeaderContent from "../HeaderContent";
import PlayerContent from "../PlayerContent";

const nba = require("nba");
  
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
       randomPlayer1: {},
       randomPlayer1ID: null,
       
       randomPlayer2: {},
       randomPlayer2ID: null,
    }
  }
  
  // componentDidMount = async () => {
  //   nba.stats.playerInfo({PlayerID: this.state.randomPlayer}).then((data) => {
  //     console.log(data);
  //   });
  // }
  randomPlayer1 = () => {
    this.setState({ 
      randomPlayer1ID: this.state.players[Math.floor(Math.random() * 
      this.state.players.length)].id
    }, () => {
      nba.stats.playerInfo({PlayerID: this.state.randomPlayer1ID}).then((data) => {
        console.log(data.playerHeadlineStats[0].pts);
        console.log(data.commonPlayerInfo[0].displayFirstLast);
        this.setState({
          randomPlayer1: data.commonPlayerInfo[0],
          randomPlayer1Stats: data.playerHeadlineStats[0].pts
        });
      });
    })
  }

  randomPlayer2 = () => {
    this.setState({ 
      randomPlayer2ID: this.state.players[Math.floor(Math.random() * 
      this.state.players.length)].id
    }, () => {
      nba.stats.playerInfo({PlayerID: this.state.randomPlayer2ID}).then((data) => {
        console.log(data.playerHeadlineStats[0].pts);
        console.log(data.commonPlayerInfo[0].displayFirstLast);
        this.setState({
          randomPlayer2: data.commonPlayerInfo[0],
          randomPlayer2Stats: data.playerHeadlineStats[0].pts
        });
      });
    })
  }

  randomizePlayers = () => {
    this.randomPlayer1();
    this.randomPlayer2();
  }

  checkAnswer = (e) => {
    const selectedPlayer = e.target.innerText;
    const { randomPlayer1, randomPlayer2, randomPlayer1Stats, randomPlayer2Stats } = this.state;
    console.log('player1 selected', selectedPlayer) 
    if(selectedPlayer === randomPlayer1.displayFirstLast) {
        if(randomPlayer1Stats > randomPlayer2Stats) {
           console.log('correct');
           e.target.style.color = 'green';
        } else if(randomPlayer1Stats < randomPlayer2Stats) {
          console.log('incorrect');
          e.target.style.color = 'red';
      }
    }
      if(selectedPlayer === randomPlayer2.displayFirstLast) {
        if(randomPlayer2Stats > randomPlayer1Stats) {
           console.log('correct');
           e.target.style.color = 'green';
        } else if(randomPlayer2Stats < randomPlayer1Stats) {
          console.log('incorrect');
          e.target.style.color = 'red';
      }
    }
    setTimeout(this.randomizePlayers, 2000);
  }
  render() {
    return (
        <div className="container">
          <HeaderContent randomizePlayers={this.props.randomizePlayers}/>
          <PlayerContent checkAnswer={this.props.checkAnswer}/>
        </div>
    );
  }
}

export default App;
