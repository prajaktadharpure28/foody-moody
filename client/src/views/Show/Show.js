import React, {useState} from 'react'
import FoodItemCard from '../../component/FoodItemCard/FoodItemCard'
import "./Show.css"

function Show() {

    const [foodItems, setFoodItems] = useState([
      {
        id: 1,
        title: 'Idli',
        price: 10,
        category: 'breakfast'
    },
    {
        id: 2,
        title: 'Dosa',
        price: 20,
        category: 'breakfast'
    },
    {
        id: 3,
        title: 'utthapam',
        price: 30,
        category: 'breakfast'
    }
    ])

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