import React, {Component} from 'react';
import Search from './search';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <h1>NutriCompare</h1>
                    </div>
                    <Search />
                </div>
                {this.props.children}
            </div>
        );
    }
}
