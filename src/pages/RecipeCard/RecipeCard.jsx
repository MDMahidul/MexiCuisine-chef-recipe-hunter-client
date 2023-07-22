import React from 'react';


const RecipeCard = ({recipe}) => {
    const { id, name, imageURL, ingredients, cookingMethod, rating } = recipe;
    console.log(recipe);

    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <img className="" src={imageURL} alt="" />
          <div className="card-body">
            <p className="card-title fs-5">{name}</p>
            <p className="gray">
              <span className="fw-bold">Ingredients: </span>
              {recipe.ingredients.join(", ")}
            </p>
            <p className="gray">
              <span className="fw-bold">CookingMethod: </span>
              {cookingMethod}
            </p>
           
          </div>
        </div>
      </div>
    );
};

export default RecipeCard;