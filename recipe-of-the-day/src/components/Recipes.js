import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';


class Recipes extends Component {

    renderRecipes() {
        const recipe = recipes.map((rece, index) => {
            return (
                <ul key={index}>
                <Recipe rece={rece} key={index} />
                </ul>
            )


        })

        return recipe;
    }

    render() {
        return (
            <div className="Recipes">
                <h1>Recipes</h1>
                <div className="Recipe">
                    
                        {this.renderRecipes()}
                    
                </div>
            </div>
        )
    }

}


export default Recipes;



