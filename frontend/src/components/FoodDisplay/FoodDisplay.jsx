import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter food items based on the selected category (if applicable)
  const FoodList = category === "All" ? food_list : food_list.filter(item => item.category === category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        
         {food_list.map((item,index) => {

            if (category==="All" || category=== item.category) {
              return  <FoodItem 
              key={index} // Use a unique identifier for the key prop
              id={item._id}
              name={item.name}
              description={item.description} 
              price={item.price} 
              image={item.image}  />

            }


        
            
         })}
        </div>
        
      
      
        
      </div>
  
  );
};

export default FoodDisplay;
