import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class Search extends Component {
    onSubmit(props) {
        //do submit
    }

    render() {
        return (
            <div className="col-md-5">
                <form>
                    <div className="quick-search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Quick nutrition search..."/>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-secondary">Go!</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
