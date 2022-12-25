import React from 'react'
import "./FoodItemCard.css"

function FoodItemCard({id, title, category, price}) {
  return (
    <div className="food-item-card">
        <h6>{id} - {title}</h6>
        <p> 🥘 {category} - ₹{price}</p>
    </div>
  )
}

        

export default FoodItemCard