import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { FoodOrderingContext } from "../context/FoodOrdering";
import Review from "./Review";

export default function RestuarantPage() {
  const { dedicatedResturant,customerRating,setCustomerRatings,rateBtn,setRateBtn } = useContext(FoodOrderingContext);
    
  const {
    id,
    address,
    averageRating,
    description,
    menu,
    name,
    phone,
    ratings,
  } = dedicatedResturant;
  return (
    <div className="resturant-container">
      <Link to="/">🔙 </Link>
      <div className="resturant-detail">
        <div>
          <h3>{name}</h3>
          <p>
            {menu.map(({ name }) => (
              <span>{name}, </span>
            ))}
          </p>
          <p>{address}</p>
          <p>
            Average Rating: <span>{averageRating}</span>
          </p>
        </div>
        <button className="add-review-btn" onClick={()=>setRateBtn(!rateBtn)}>Add Review</button>
      </div>
      <div>
        <p style={{textAlign:'center'}}>Reviews</p>
        <div className="rating-container">
        {customerRating && customerRating.map(customerRate =>{
            const{comment,pp,rating,revName} = customerRate
            return <div>
                <div className="img-name-rating">
                    <div className="img-name">
                        {pp ?<img src={pp} alt={name}/> : <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt={name}/>}
                     <h6>{revName}</h6>
                    </div>
                    <p className="rating-display">⭐{rating}</p>
                </div>
                <p>{comment}</p>
                <hr/>
            </div>
           
        })}
        </div>
      </div>
      {rateBtn && <Review/>}

    </div>
  );
}
