import React, { Component } from 'react';

class PlayerContent extends Component {
    render() {
        const green = {
            // color: 'rgb(0, 255, 0)'
            color: 'green'
        }

        const red = {
            // color: 'rgb(255, 0, 0)'
            color: 'red'
        }

        const white = {
            // color: 'rgb(255, 0, 0)'
            color: 'white'
        }

        return (
            <div>
                <div
                    className='playerOne'
                    onClick={this.props.checkAnswer}
                    // style={this.props.randomPlayer1Correct ? green : white}>
                    style={{color: this.props.player1Color}}>
                    {this.props.randomPlayer1}
                </div>
                <div
                    className='playerTwo'
                    onClick={this.props.checkAnswer}
                    // style={this.props.randomPlayer2Correct ? green : white}>
                    style={{color: this.props.player2Color}}>
                    {this.props.randomPlayer2}
                </div>
            </div>
        );
    }

}

export default PlayerContent;