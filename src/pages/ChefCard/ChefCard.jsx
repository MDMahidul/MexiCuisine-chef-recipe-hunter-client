import React from 'react';
import './ChefCard.css'
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ChefCard = ({chef}) => {
    const {name,imageURL,yearsOfExperience,numRecipes,likes} = chef;
    return (
      <div className="col-md-4 mb-4">
        <div className="card border-0 shadow">
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text fw-semibold gray">
              <span className="fw-bold">Years of Experiencd: </span>
              {yearsOfExperience}
            </p>
            <p className="card-text fw-semibold gray">
              <span className="fw-bold">Number of recipes: </span>
              {numRecipes}
            </p>
            <p className="card-text fw-semibold gray">
              <span className="fw-bold">Likes: </span>
              {likes}
            </p>
            <Button to="">View Recipes</Button>
          </div>
        </div>
      </div>
    );
}

export default ChefCard;