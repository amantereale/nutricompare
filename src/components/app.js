import React, {Component} from 'react';
import Search from './search';
import LoadingBar from 'react-redux-loading-bar'

export default class App extends Component {
    render() {
        return (
            <div>
                <LoadingBar/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1>NutriCompare</h1>
                        </div>
                        <Search/>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
