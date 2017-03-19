import React, {Component} from 'react';
import {connect} from 'react-redux';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    renderResults() {
        return this.props.nutritionData.map((entry) => {
            return (
                <tr key={entry.report.food.ndbno}>
                    <td>{entry.report.food.name}</td>
                    <td>{entry.report.food.nutrients[1].value}</td>
                    <td>{entry.report.food.nutrients[0].value}</td>
                    <td>{entry.report.food.nutrients[2].value}</td>
                    <td>{entry.report.food.nutrients[3].value}</td>
                    <td>{entry.report.food.nutrients[4].value}</td>
                    <td>{entry.report.food.nutrients[6].value}</td>
                    <td>{entry.report.food.nutrients[5].value}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Energy (kcal)</th>
                        <th>Water (g)</th>
                        <th>Protein (g)</th>
                        <th>Fats (g)</th>
                        <th>Carbs (g)</th>
                        <th>Sugars (g)</th>
                        <th>Fiber (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderResults()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {nutritionData: state.quickSearchNutrition.nutritionData};
}

export default connect(mapStateToProps, null)(Results);
