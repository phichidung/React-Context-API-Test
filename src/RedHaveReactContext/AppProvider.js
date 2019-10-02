import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {

    state = {
        number: 10
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default class Red extends Component {

    render() {
        return (
            <Red>
                <div className={style.styleRed}>
                    <AppContext.Consumer>
                        {(context) => context.number}
                    </AppContext.Consumer>
                    <Blue/>
                </div>
            </Red>
        );
    }
}

export class Blue extends Component {

    render() {
        return (
            <div className={style.styleBlue}>
                <Green/>
            </div>
        );
    }
}

export class Green extends Component {

    render() {
        return (
            <div className={style.styleGreen}>
                <AppContext.Consumer>
                    {(context) => context.number}
                </AppContext.Consumer>
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
