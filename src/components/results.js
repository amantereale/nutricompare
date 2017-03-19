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

    renderRowFor(row, nutrient_ids) {
        var food = row.report.food;

        var nutrients = nutrient_ids.map((nutrient_id) => {
            return (
                <td key={nutrient_id}>{this.renderValueFor(row, nutrient_id)}</td>
            )
        });

        return (
            <tr key={food.ndbno}>
                <td>{food.name}</td>
                {nutrients}
            </tr>
        );
    }

    renderValueFor(row, nutrient_id) {
        var entry = _.find(row.report.food.nutrients, function(f) {
            return f.nutrient_id == nutrient_id
        });

        if (entry == null)
            return '-';
        else
            return entry.value;
        }

    renderResults() {
        return this.props.nutritionData.map((entry) => {
            if (this.props.selectedTab === 1) {
                return (this.renderRowFor(entry, [
                    208,
                    255,
                    203,
                    204,
                    205,
                    269,
                    291
                ]));
            } else if (this.props.selectedTab === 2) {
                return (this.renderRowFor(entry, [
                    301,
                    303,
                    304,
                    305,
                    306,
                    307,
                    309
                ]));
            } else if (this.props.selectedTab === 3) {
                return (this.renderRowFor(entry, [
                    401,
                    404,
                    405,
                    406,
                    415,
                    435,
                    418,
                    320,
                    318,
                    323,
                    328,
                    324,
                    430
                ]));
            } else if (this.props.selectedTab === 4) {
                return (this.renderRowFor(entry, [606, 645, 646, 605, 601]));
            } else if (this.props.selectedTab === 5) {
                return (this.renderRowFor(entry, [262]));
            }
        });
    }

    render() {
        if (this.props.nutritionData.length > 0) {
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
