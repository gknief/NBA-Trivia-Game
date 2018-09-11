import React, { Component } from 'react';


class HeaderContent extends Component {
    render() {
        return (
            <div>
                <h1 className="title">NBA Trivia</h1>
                <h2>Who averaged the most points per game?</h2>
                <button onClick={this.props.randomizePlayers}>Start Game</button>
            </div>
        );
    }

}
export default HeaderContent;