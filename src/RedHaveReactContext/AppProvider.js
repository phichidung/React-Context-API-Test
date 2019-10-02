import React, { Component } from 'react';

const NumberContext = React.createContext(10);

export default class AppProvider extends Component {

    state = {
        number: 5
    };

    render() {
        return (
            <NumberContext.Provider value={this.state.number}>
                <NumberContext.Consumer>
                    {(context) => <h2>{context}</h2>}
                </NumberContext.Consumer>
            </NumberContext.Provider>
        );
    }
}
