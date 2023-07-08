import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { FoodOrderingContext } from "../context/FoodOrdering";


export default function Home() {

  const { cuisineBtn, restaurants, selectedCuision, setSelectedCuision ,setDedicatedRestaurant,setCustomerRatings} =
    useContext(FoodOrderingContext);
  console.log(cuisineBtn);

  const cuisineBtnHandle = (id) => {
    const filterCuisine = restaurants.filter(
      ({ cuisine_id }) => cuisine_id === id
    );
    console.log("filteredcuisine", filterCuisine);
    setSelectedCuision(filterCuisine);
  };

  const restaurantsHandle = (restaurants) =>{
    console.log(restaurants)
    console.log(restaurants.ratings)
    setCustomerRatings(restaurants.ratings)
    setDedicatedRestaurant(restaurants);

  }
  return (
    <div>
        <div className="heading">
        <h1>Food Ordering APP</h1>
      <p>select your cuisine</p>
        </div>
      
      <div className="btn-container">
        {cuisineBtn &&
          cuisineBtn.map(({ id, name }) => (
            <button
              onClick={() => cuisineBtnHandle(id)}
              className="cuisine-btn"
              key={id}
            >
              {name}
            </button>
          ))}
      </div>
      <div>
        {selectedCuision &&
          selectedCuision.map(selectedCuisionItem  => {
            const {id, name, menu} = selectedCuisionItem 
            console.log("selectedCuision", id, name, menu);
            return (
              <div className="cuisine-display" key={id}>
                <Link to="/resturants" className="link" ><h3  className="resturant-name" onClick={()=>restaurantsHandle(selectedCuisionItem)} >Dishes by {name}</h3></Link>
                <Link to="/resturants" className="link" onClick={()=>restaurantsHandle(selectedCuisionItem)}>
                <div className="cuisine-card">
                {menu &&
                  menu.map(({ imgSrc, name, price, qty }) => (
                    <div className="card-container">
                      <img className="card-img" src={imgSrc} alt={name} />
                      <div className="card-detail">
                      <h5>{name}</h5>
                      <p>
                        Rs. {price} for {qty}
                      </p>
                      </div>
                     
                    </div>
                  ))}
                  </div>
                </Link>
                
              </div>
            );
          })}
      </div>
    </div>
  );
}
