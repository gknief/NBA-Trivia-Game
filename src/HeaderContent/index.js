import React, { Component } from 'react';

class HeaderContent extends Component {

    handleClick = () => {
        this.props.randomizePlayers();
    }

    render() {
        return (
            <div>
                <h1 className="title">NBA Trivia</h1>
                <h2>Who averaged the most points per game?</h2>
                <button onClick={this.handleClick}>Generate Players</button>
            </div>
        );
    }

}
export default HeaderContent;