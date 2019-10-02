import React, { Component } from 'react';
import RedWithoutReactContext from "./RedWithoutReactContext/Red";

export default class App extends Component {

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>This is react-context-api-test</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <RedWithoutReactContext/>
                </div>
            </div>
        );
    }
}
