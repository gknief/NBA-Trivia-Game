import React, { Component } from "react";
import "./style.css";
const nba = require("nba");
  const hawks = 1610612737;
  const celtics = 1610612738;
  const nets = 1610612751;
  const hornets = 1610612766;
  const bulls = 1610612741;
  const cavs = 1610612739;
  const mavs = 1610612742;
  const nuggets = 1610612743;
  const pistons = 1610612765;
  const warriors = 1610612744;
  const rockets = 1610612745;
  const pacers = 1610612754;
  const clippers = 1610612746;
  const lakers = 1610612747;
  const grizzlies = 1610612763;
  const heat = 1610612748;
  const bucks = 1610612749;
  const timberwolves = 1610612750;
  const pelicans = 1610612740;
  const knicks = 1610612752;
  const thunder = 1610612760;
  const magic = 1610612753;
  const sixers = 1610612755;
  const suns = 1610612756;
  const blazers = 1610612757;
  const kings = 1610612758;
  const spurs = 1610612759;
  const raptors = 1610612761;
  const jazz = 1610612762;
  const wizards = 1610612764;

  const lebron = 2544;
  const kd = 201142;
  const steph = 201939;
  const harden = 201935;
  const kawhi = 202695;
  const giannis = 203507;
  const melo = 2546;
  const cp3 = 101108;
  const davis = 203076;
  const derozan = 201942;
  const kyrie = 202681;
  const westbrook = 201566;
  const boogie = 202326;
  const klay = 202691;
  const towns = 1626157;
  const love = 201567;
  const lowry = 200768;
  const deandre = 201599;
  const jokic = 203999;
  const dwight = 2730;
  const porzingis = 204001;
  const simmons = 1627732;
  const dsj = 1628372;
  const mitchell = 1628378;
  const tatum = 1628369;
  const lonzo = 1628366;
  const aldridge = 200746;
  const drummond = 203083;
  const embiid = 203954;
  const george = 202331;
  const gobert = 203497;
  const draymond = 203110;
  const blake = 201933;
  const oladipo = 203506;
  const wade = 2548;
  const wall = 202322;
  const kemba = 202689;
  const gasol = 201188;


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       players: [],
    }
  }
  


  componentDidMount = async () => {
    // const curry = nba.findPlayer('Stephen Curry');
    // const lebron = nba.findPlayer('LeBron James');
    nba.stats.playerStats({TeamID: warriors, Season: "2016-17" }).then((data) => {
      console.log(data);
    });
    nba.stats.playerStats({TeamID: knicks, Season: "2016-17" }).then((data) => {
      console.log(data);
    });
    nba.stats.playerProfile({PlayerID: kd, Season: "2017-18"}).then((data) => {
      console.log(data);
    });
}
  



  render() {
    return <div className="App">NBA Trivia</div>;
  }
}

export default App;
