import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       players: [],
    }
  }
  

  componentDidMount = async () => {
    const nbaPlayers = await fetch(`http://api.sportradar.us/nba/trial/v5/en/seasons/2017/REG/leaders.json?api_key=9ckqa4pt9gnte22qkjaafd65
    `)
    const nbaPlayersjson = await nbaPlayers.json();
  
    console.log(nbaPlayersjson);

}




  render() {
    return <div className="App">NBA Trivia</div>;
  }
}

export default App;
