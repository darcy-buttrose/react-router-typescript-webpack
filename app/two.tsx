/// <reference path="./typings/typings.d.ts" />
import * as React from 'react';

interface ITwoProps {};
interface ITwoState {};
export default class Two extends React.Component<ITwoProps,ITwoState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: 400}}>
                <h1>Two</h1>
            </div>
        );
    }
}
