import React, { useContext } from "react";
import { FoodOrderingContext } from "../context/FoodOrdering";


export default function Review() {
    const { rateBtn,setRateBtn,ratingInput,setRatingInput ,customerRating,setCustomerRatings} = useContext(FoodOrderingContext);

    const onchangehandle = (name,value)=>{
        console.log(name,value)
        
        setRatingInput({
            ...ratingInput,[name]:value
        })
    }

    const submitHandle = () =>{
        setRateBtn(false);
        setCustomerRatings([...customerRating,ratingInput])
    }

  return (
    <div className="review-container">
       <button onClick={()=>setRateBtn(!rateBtn)} className="close">X</button>
      <h4 style={{textAlign:'center'}}>Add Your Review</h4>
      <div className="select-rating">
        <p>Select Rating:</p>
      <select name="rating" id="rating" onChange={(e)=>onchangehandle(e.target.name,e.target.value)}>
        <option value="select your rating">Select Your Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      <div className="comment">
        <label>
            comment:
        </label>
        <input name="comment" type="text" onChange={(e)=>onchangehandle(e.target.name,e.target.value)} required/>
      </div>
      <button className="submit-btn" onClick={submitHandle}>Submit</button>
      
    </div>
  );
}
