import React, {Component} from 'react';
import API from './API';

class Questions extends Component {
    render() {
        const { playerData } = this.props;


        return (
            <h1>NBA Trivia</h1>
            <Questions playerData={playerData} />
        )
    }

}

export default Questions;