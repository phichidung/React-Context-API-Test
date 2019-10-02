import React, { Component } from 'react';
// Without Context
import RedWithoutReactContext from "./RedWithoutReactContext/Red";
// Have Context
import NumberProvider from "./RedHaveReactContext/NumberProvider";
import NumberContext from "./RedHaveReactContext/contexts/NumberContext";

export default class App extends Component {

    render() {
        return (
            <NumberProvider>
                <h1 style={{ textAlign: "center" }}>Without Context</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <RedWithoutReactContext/>
                </div>

                <h1 style={{ textAlign: "center" }}>Have Context</h1>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                    <NumberContext.Consumer>
                        {(context) => <h2>{context.number}</h2>}
                    </NumberContext.Consumer>
                </div>
            </NumberProvider>
        );
    }
}
