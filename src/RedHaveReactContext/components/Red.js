import React, { Component } from 'react';
import NumberProvider from "../providers/NumberProvider";
import NumberContext from "../contexts/NumberContext";

export class Green extends Component {

    render() {

        return (
            <NumberProvider>
                <div style={style.styleGreen}>
                    <NumberContext.Consumer>
                        {(context) => <h2>{context.number}</h2>}
                    </NumberContext.Consumer>
                </div>
            </NumberProvider>
        );
    }
}

export class Blue extends Component {

    render() {

        return (
            <div style={style.styleBlue}>
                <Green/>
            </div>
        );
    }
}

export default class Red extends Component {

    render() {

        return (
            <NumberProvider>
                <div style={style.styleRed}>
                    <NumberContext.Consumer>
                        {(context) => (context.number)}
                    </NumberContext.Consumer>
                    <Blue/>
                </div>
            </NumberProvider>
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
