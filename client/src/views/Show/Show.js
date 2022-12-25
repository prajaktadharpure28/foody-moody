import React, {useState, useEffect} from 'react'
import FoodItemCard from '../../components/FoodItemCard/FoodItemCard'

import "./Show.css"

function Show() {
  const [foodItems, setFoodItems] = useState([])

  async function loadData(){
    // load data from API
    const response = await axios.get('/all-food-items')
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
        <h1>Show All Food Items</h1>
        {
          foodItems.map((item) => {
            return (
            <FoodItemCard 
            id={item.id} 
            title={item.title} 
            category={item.category} 
            price={item.price} />)
          })
        }
    </div>
  )
}

export default Show