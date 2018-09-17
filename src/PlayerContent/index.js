import React, { Component } from 'react';

class PlayerContent extends Component {
    render() {
        return (
            <div>
                <a className="playerOne" href="#" onClick={this.props.checkAnswer} style={this.props.style1}>{this.props.randomPlayer1}</a>
                <a className="playerTwo" href="#" onClick={this.props.checkAnswer}>{this.props.randomPlayer2}</a>
            </div>
        );
    }

}

export default PlayerContent;