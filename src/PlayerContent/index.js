import React, { Component } from 'react';

class PlayerContent extends Component {
    render() {
        return (
            <div>
                <a className="playerOne" href="#" onClick={this.props.checkAnswer}>{this.state.props.randomPlayer1.displayFirstLast}</a>
                <a className="playerTwo" href="#" onClick={this.props.checkAnswer}>{this.state.props.randomPlayer2.displayFirstLast}</a>
            </div>
        );
    }

}

export default PlayerContent;