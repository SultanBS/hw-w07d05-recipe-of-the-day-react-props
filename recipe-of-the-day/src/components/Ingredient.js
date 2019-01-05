import React from 'react';


const Ingredient = (props) => {
    const ing = props.ing;

    return(
        <p>{ing.ingredient} - {ing.amount}</p>

    )
}

export default Ingredient;
