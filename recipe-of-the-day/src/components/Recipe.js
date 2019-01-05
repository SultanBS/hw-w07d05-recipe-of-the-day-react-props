import React from 'react';


const Recipe = (props) => {
    const rece = props.rece;

    return(
        <div className="reciepe">
        <li>Name: {rece.name}</li>
        <li>Serves: {rece.servings}</li>
        <li>Category: {rece.category}</li>
        </div>
    )
}

export default Recipe;
