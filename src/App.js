import React, { Component } from 'react';
// Without Context
import RedWithoutReactContext from "./RedWithoutReactContext/Red";
// Have Context
import RedHaveReactContext from './RedHaveReactContext/components/Red';

export default class App extends Component {

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Without Context</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <RedWithoutReactContext/>
                </div>

                <h1 style={{ textAlign: "center" }}>Have Context</h1>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                    <RedHaveReactContext/>
                </div>
            </div>
        );
    }
}
