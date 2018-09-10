import React, { Component } from "react";
import "./style.css";
// import API from "../API";
// import Questions from "../Questions";
const nba = require("nba");
  // const hawks = 1610612737;
  // const celtics = 1610612738;
  // const nets = 1610612751;
  // const hornets = 1610612766;
  // const bulls = 1610612741;
  // const cavs = 1610612739;
  // const mavs = 1610612742;
  // const nuggets = 1610612743;
  // const pistons = 1610612765;
  // const warriors = 1610612744;
  // const rockets = 1610612745;
  // const pacers = 1610612754;
  // const clippers = 1610612746;
  // const lakers = 1610612747;
  // const grizzlies = 1610612763;
  // const heat = 1610612748;
  // const bucks = 1610612749;
  // const timberwolves = 1610612750;
  // const pelicans = 1610612740;
  // const knicks = 1610612752;
  // const thunder = 1610612760;
  // const magic = 1610612753;
  // const sixers = 1610612755;
  // const suns = 1610612756;
  // const blazers = 1610612757;
  // const kings = 1610612758;
  // const spurs = 1610612759;
  // const raptors = 1610612761;
  // const jazz = 1610612762;
  // const wizards = 1610612764;

  const lebron = 2544;
 


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
       questions: [
        {
           'q': 'Which player averaged the most points per game in the 2017-18 NBA season?',
           'id': 'pts'
        },
        // {
        //   'q': 'Which player averaged the most rebounds per game in the 2017-18 NBA season?',
        //   'id': 'reb'
        // },
        // {
        //   'q': 'Which player averaged the most assists per game in the 2017-18 NBA season?',
        //   'id': 'ast'
        // }
       ],
       randomPlayer: [],
    }
  }
  
  componentDidMount = async () => {
    nba.stats.playerInfo({PlayerID: lebron}).then((data) => {
      console.log(data.playerHeadlineStats[0].pts);
    });
  }
  randomizePlayers = () => {
    this.setState({ 
      randomPlayer: this.state.players[Math.floor(Math.random() * 
      this.state.players.length)]
    })
  }


  render() {
    return (
        <div className="container">
        <button onClick={this.randomizePlayers}>Start Game</button>
        <h1>{this.state.randomPlayer}</h1>
          {/* <Questions playerData={this.state.players} />
          <API /> */}
        </div>
    );
  }
}

export default App;
