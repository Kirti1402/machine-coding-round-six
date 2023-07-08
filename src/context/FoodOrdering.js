import { createContext, useState } from "react";
import {cuisineData,restaurantsData} from "../JsonData";


export const FoodOrderingContext = createContext()

export const FoodOrderingProvider =({children})=>{

    const [cuisineBtn, setCuisineBtn] = useState(cuisineData)
    const [restaurants,setRestaurants] = useState(restaurantsData)
    const [selectedCuision,setSelectedCuision] = useState([])
    const [dedicatedResturant,setDedicatedRestaurant] = useState({})
    const [customerRating,setCustomerRatings] = useState([])
    const [rateBtn,setRateBtn]= useState(false);
    const [ratingInput,setRatingInput] = useState({
        rating:"",
        comment:""
    })

    return <FoodOrderingContext.Provider value={{cuisineBtn,restaurants,selectedCuision,setSelectedCuision,dedicatedResturant,setDedicatedRestaurant,customerRating,setCustomerRatings,rateBtn,setRateBtn,ratingInput,setRatingInput}}>
        {children}
    </FoodOrderingContext.Provider>

}