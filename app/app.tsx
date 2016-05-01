/// <reference path="./typings/typings.d.ts" />
import * as React from 'react';
import {Link} from 'react-router';

interface IAppProps {
    
};
interface IAppState {
    
}

export default class App extends React.Component<IAppProps,IAppState> {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="one">One</Link></li>
                    <li><Link to="two">Two</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}