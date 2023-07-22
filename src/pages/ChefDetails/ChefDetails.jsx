import React from "react";
import "./ChefDetails.css";
import { useLoaderData } from "react-router-dom";
import { Container } from "react-bootstrap";
import RecipeCard from "../RecipeCard/RecipeCard";

const ChefDetails = () => {
  const chefs = useLoaderData();
  const { id, name, imageURL, yearsOfExperience, numRecipes, likes,bio,recipes } =
    chefs.item;

  return (
    <Container className="py-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={imageURL} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text gray">{bio}</p>
              <p className="card-text fw-semibold gray details-ans">
                <span className="fw-bold details-title">
                  Years of Experiencd:{" "}
                </span>
                {yearsOfExperience}
              </p>
              <p className="card-text fw-semibold gray details-ans">
                <span className="fw-bold details-title">
                  Number of recipes:{" "}
                </span>
                {numRecipes}
              </p>
              <p className="card-text fw-semibold gray details-ans">
                <span className="fw-bold details-title">Number of likes: </span>
                {likes}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 ">
        <h2 className="fw-bold text-center pt-4 my-5">Recipes of {name}</h2>
        <div className="row">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ChefDetails;
