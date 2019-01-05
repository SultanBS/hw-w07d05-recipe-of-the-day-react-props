import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {

    renderIngredients() {
        const ingredients = recipeOfTheDay.ingredients.map((ing, index) => {
            return (
                <Ingredient ing={ing} key={index} />
            )
            

        })
        
        return ingredients;
    }

    render() {
        return (
            <div className="RecipeOfTheDay">
                <h2 className="r">Recipe of the Day</h2>
                <h3>{recipeOfTheDay.name}</h3>

                <h2>Description:</h2>
                <p>{recipeOfTheDay.description}</p>

                <h2>Ingredients:</h2>
                <div className="ingredient">
                    {this.renderIngredients()}
                </div>


            </div>
        )
    }

}


export default RecipeOfTheDay;



