import React, { Component } from 'react';

export class Green extends Component {

    render() {
        const { number } = this.props;

        return (
            <div style={style.styleGreen}>
                {number}
            </div>
        );
    }
}

export class Blue extends Component {

    render() {
        const { number } = this.props;

        return (
            <div style={style.styleBlue}>
                <Green number={number}/>
            </div>
        );
    }
}

export default class Red extends Component {

    state = {
        number: 10
    };

    render() {

        return (
            <div style={style.styleRed}>
                {this.state.number}
                <Blue number={this.state.number}/>
            </div>
        );
    }
}

const style = {
    styleRed: {
        background: 'red',
        height: 300,
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleBlue: {
        background: 'blue',
        height: 200,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleGreen: {
        background: 'green',
        height: 100,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
