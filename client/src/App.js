import React, {useState} from 'react'
import axios from 'axios'

function App() {

  const [foodItems, setFoodItems] = useState([])

  async function loadData(){
    const response = await axios.get('/food-item-by-category?category=breakfast')
    console.log(response.data.data)
    setFoodItems(response.data.data)
  }

  return (
    <div>
      <h1>Food App</h1>
      <button onClick={loadData}>Make API Call</button>
      {
        foodItems.map((item) => {
          return (<h1>{item.title}</h1>)
        })
      }
    </div>
  )
}

export default App