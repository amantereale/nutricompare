import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {connect} from 'react-redux';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import _ from 'lodash';

import {fetchQuickSearchNutrition, fetchQuickSearchAutoSuggest} from '../actions/index';
import {API_KEY} from '../api-key';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quickSearchTerm: '',
            ndbno: '',
            suggestions: []
        };

        this.debouncedSuggestionFetch = _.debounce(this.loadSuggestions, 500);
    }

    loadSuggestions(search) {
        this.props.showLoading();

        this.setState({ndbno: ''});

        axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=50&ds=Standard Reference&offset=0&api_key=${API_KEY}&q=${search}`).then((resp) => {
            this.props.hideLoading();

            if (!resp.data.errors) {
                const newSuggestions = _.map(resp.data.list.item, obj => {
                    return {ndbno: obj.ndbno, name: obj.name}
                });

                this.setState({suggestions: newSuggestions});
            } else {
                this.setState({suggestions: []});
            }
        });
    }

    onSuggestionsFetchRequested(value) {
        this.debouncedSuggestionFetch(value);
    }

    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }

    onSuggestionsClearRequested = () => {
        this.setState({suggestions: []});
    };

    getSuggestionValue(suggestion) {
        this.setState({ndbno: suggestion.ndbno});

        return suggestion.name;
    }

    onChange = (event, {newValue}) => {
        this.setState({quickSearchTerm: newValue});
    };

    onSearchSubmit(e) {
        e.preventDefault();

        this.props.fetchQuickSearchNutrition(this.state.ndbno).then(() => { this.props.hideLoading() });
    }

    render() {
        const inputProps = {
            placeholder: "Search food to compare...",
            value: this.state.quickSearchTerm,
            onChange: this.onChange,
            className: 'form-control'
        };

        return (
            <div className="col-md-5">
                <form onSubmit={e => this.onSearchSubmit(e)}>
                    <div className="quick-search">
                        <div className="input-group">
                            <Autosuggest suggestions={this.state.suggestions} onSuggestionsFetchRequested={(e) => this.onSuggestionsFetchRequested(e.value)} onSuggestionsClearRequested={() => this.onSuggestionsClearRequested()} getSuggestionValue={(e) => this.getSuggestionValue(e)} renderSuggestion={this.renderSuggestion} inputProps={inputProps}/>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary" disabled={this.state.ndbno == ''}>Go!</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchQuickSearchNutrition,
        fetchQuickSearchAutoSuggest,
        showLoading,
        hideLoading
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
