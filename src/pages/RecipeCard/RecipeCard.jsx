import React, { useState } from 'react';
import "@smastrom/react-rating/style.css";
import { Rating } from '@smastrom/react-rating';
import { FaRegThumbsUp } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';

const RecipeCard = ({recipe}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const { id, name, imageURL, ingredients, cookingMethod, rating } = recipe;


    const handleLike=()=>{  
        toast.success("Liked The Recipe");
        setIsDisabled(true);
    }

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
            <div className="d-flex justify-content-between">
              <div className="flex-grow-1 d-flex align-items-center">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={Math.round(rating || 0)}
                  readOnly
                />
                <span className="ms-2"> {rating}</span>
              </div>
              <div>
                <Button
                  onClick={handleLike}
                  disabled={isDisabled}
                  className="fs-5 bg-white text-dark border-0"
                >
                  <FaRegThumbsUp></FaRegThumbsUp>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RecipeCard;