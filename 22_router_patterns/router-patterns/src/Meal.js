import React, { Component } from 'react';


class Meal extends Component {
    render() {
        const food = this.props.match.params.foodName;
        const foodUrl = `https://source.unsplash.com/1600x900/?${food}`;
        const drink = this.props.match.params.drinkName;
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drink}`;
        return (
            <div>
                <h1>This is a meal of {food} and {drink}!</h1>
                <img src={foodUrl} alt={food} />
                <img src={drinkUrl} alt={drink} />
            </div>
        );
    }
}


export default Meal;