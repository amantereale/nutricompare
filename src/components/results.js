import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tabs from './tabs';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    renderHead() {
        if (this.props.selectedTab === 1) {
            return (
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
            );
        } else if (this.props.selectedTab === 2) {
            return (
                <tr>
                    <th>Item</th>
                    <th>Calcium (mg)</th>
                    <th>Iron (mg)</th>
                    <th>Magnesium (mg)</th>
                    <th>Phosphorus (mg)</th>
                    <th>Potassium (mg)</th>
                    <th>Sodium (mg)</th>
                    <th>Zinc (mg)</th>
                </tr>
            );
        } else if (this.props.selectedTab === 3) {
            return (
                <tr>
                    <th>Item</th>
                    <th>Vit. C<br/>(mg)</th>
                    <th>Thiamin<br/>(mg)</th>
                    <th>Riboflavin<br/>(mg)</th>
                    <th>Niacin<br/>(mg)</th>
                    <th>Vit. B-6<br/>(mg)</th>
                    <th>Folate<br/>(µg)</th>
                    <th>Vit. B-12<br/>(µg)</th>
                    <th>Vit. A, RAE<br/>(µg)</th>
                    <th>Vit. A, IU<br/>(IU)</th>
                    <th>Vit. E<br/>(mg)</th>
                    <th>Vit. D, D2 + D3<br/>(µg)</th>
                    <th>Vit. D<br/>(IU)</th>
                    <th>Vit. K<br/>(µg)</th>
                </tr>
            );
        } else if (this.props.selectedTab === 4) {
            return (
                <tr>
                    <th>Item</th>
                    <th>Fatty acids, saturated (g)</th>
                    <th>Fatty acids, monounsaturated (g)</th>
                    <th>Fatty acids, polyunsaturated (g)</th>
                    <th>Fatty acids, trans (g)</th>
                    <th>Cholesterol (mg)</th>
                </tr>
            );
        } else if (this.props.selectedTab === 5) {
            return (
                <tr>
                    <th>Item</th>
                    <th>Caffeine (mg)</th>
                </tr>
            );
        }
    }

    renderValueFor(row, nutrient_id) {
        var entry = _.find(row.report.food.nutrients, function(f) { return f.nutrient_id == nutrient_id });

        if (entry == null) return '-';
        else return entry.value;
    }

    renderResults() {
        return this.props.nutritionData.map((entry) => {
            if (this.props.selectedTab === 1) {
                return (
                    <tr key={entry.report.food.ndbno}>
                        <td>{entry.report.food.name}</td>
                        <td>{this.renderValueFor(entry, 208)}</td>
                        <td>{this.renderValueFor(entry, 255)}</td>
                        <td>{this.renderValueFor(entry, 203)}</td>
                        <td>{this.renderValueFor(entry, 204)}</td>
                        <td>{this.renderValueFor(entry, 205)}</td>
                        <td>{this.renderValueFor(entry, 269)}</td>
                        <td>{this.renderValueFor(entry, 291)}</td>
                    </tr>
                );
            } else if (this.props.selectedTab === 2) {
                return (
                    <tr key={entry.report.food.ndbno}>
                        <td>{entry.report.food.name}</td>
                        <td>{this.renderValueFor(entry, 301)}</td>
                        <td>{this.renderValueFor(entry, 303)}</td>
                        <td>{this.renderValueFor(entry, 304)}</td>
                        <td>{this.renderValueFor(entry, 305)}</td>
                        <td>{this.renderValueFor(entry, 306)}</td>
                        <td>{this.renderValueFor(entry, 307)}</td>
                        <td>{this.renderValueFor(entry, 309)}</td>
                    </tr>
                );
            } else if (this.props.selectedTab === 3) {
                return (
                    <tr key={entry.report.food.ndbno}>
                        <td>{entry.report.food.name}</td>
                        <td>{this.renderValueFor(entry, 401)}</td>
                        <td>{this.renderValueFor(entry, 404)}</td>
                        <td>{this.renderValueFor(entry, 405)}</td>
                        <td>{this.renderValueFor(entry, 406)}</td>
                        <td>{this.renderValueFor(entry, 415)}</td>
                        <td>{this.renderValueFor(entry, 435)}</td>
                        <td>{this.renderValueFor(entry, 418)}</td>
                        <td>{this.renderValueFor(entry, 320)}</td>
                        <td>{this.renderValueFor(entry, 318)}</td>
                        <td>{this.renderValueFor(entry, 323)}</td>
                        <td>{this.renderValueFor(entry, 328)}</td>
                        <td>{this.renderValueFor(entry, 324)}</td>
                        <td>{this.renderValueFor(entry, 430)}</td>
                    </tr>
                );
            } else if (this.props.selectedTab === 4) {
                return (
                    <tr key={entry.report.food.ndbno}>
                        <td>{entry.report.food.name}</td>
                        <td>{this.renderValueFor(entry, 606)}</td>
                        <td>{this.renderValueFor(entry, 645)}</td>
                        <td>{this.renderValueFor(entry, 646)}</td>
                        <td>{this.renderValueFor(entry, 605)}</td>
                        <td>{this.renderValueFor(entry, 601)}</td>
                    </tr>
                );
            } else if (this.props.selectedTab === 5) {
                return (
                    <tr key={entry.report.food.ndbno}>
                        <td>{entry.report.food.name}</td>
                        <td>{this.renderValueFor(entry, 262)}</td>
                    </tr>
                );
            }
        });
    }

    render() {
        if (this.props.nutritionData.length > 0) {
            console.log(this.props.nutritionData);

            return (
                <div>
                    <div>All values are per 100g</div>
                    <Tabs/>
                    <div className="tab-content">
                        <section className="panel">
                            <table className="table table-hover">
                                <thead>{this.renderHead()}</thead>
                                <tbody>{this.renderResults()}</tbody>
                            </table>
                        </section>
                    </div>
                </div>
            );
        } else {
            return (
                <div>Please use top-right search to add food to compare!</div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {nutritionData: state.quickSearchNutrition.nutritionData, selectedTab: state.selectedTab.id};
}

export default connect(mapStateToProps, null)(Results);
