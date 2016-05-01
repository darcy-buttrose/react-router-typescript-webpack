/// <reference path="./typings/typings.d.ts" />
import * as React from 'react';

interface IOneProps {};
interface IOneState {};
export default class One extends React.Component<IOneProps,IOneState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: 400}}>
                <h1>One</h1>
            </div>
        );
    }
}