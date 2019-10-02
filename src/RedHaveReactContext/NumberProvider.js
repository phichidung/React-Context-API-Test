import React, { Component } from 'react';

import NumberContext from "./contexts/NumberContext";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 5
        }
    };

    render() {
        return (
            <NumberContext.Provider value={this.state}>
                {this.props.children}
            </NumberContext.Provider>
        );
    }
}
