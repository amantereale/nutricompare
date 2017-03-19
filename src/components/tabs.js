import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTab} from '../actions/index';

class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    changeTab(id) {
        this.props.selectTab(id);
    }

    renderTab({id, name, isActive}) {
        return (
            <li onClick={() => this.props.selectTab(id)} className={isActive ? "active" : null}>
                <a href="#">{name}</a>
            </li>
        );
    }

    render() {
        if (this.props.nutritionData.length > 0) {
            return (
                <ul className="nav nav-tabs nutriTabs">
                    {this.renderTab({ id: 1, name: 'General', isActive: this.props.selectedTab === 1 })}
                    {this.renderTab({ id: 2, name: 'Minerals', isActive: this.props.selectedTab === 2 })}
                    {this.renderTab({ id: 3, name: 'Vitamins', isActive: this.props.selectedTab === 3 })}
                    {this.renderTab({ id: 4, name: 'Lipids', isActive: this.props.selectedTab === 4 })}
                    {this.renderTab({ id: 5, name: 'Other', isActive: this.props.selectedTab === 5 })}
                </ul>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {nutritionData: state.quickSearchNutrition.nutritionData, selectedTab: state.selectedTab.id};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectTab
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
