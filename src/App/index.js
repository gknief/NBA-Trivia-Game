import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       players: [],
    }
  }
  
  render() {
    return <div className="App">NBA Trivia</div>;
  }
}

export default App;
