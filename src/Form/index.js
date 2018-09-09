import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            id: ''
        };

        this.state = this.initialState;
    }
}