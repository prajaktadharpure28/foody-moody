import express from 'express';

const app = express();
app.use(express.json());

const db = [{
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
}]

// get all food items

app.get('/all-food-item', (req, res) => {
    res.json({
        status: true,
        data: db,
        message: 'All food items fetched successfully'
    })
})

// add a new item

app.post('/add-food-item', (req, res) => {
    const { id, title, price, category } = req.body;

const newItem = {
    id: id,
    title: title,
    price: price,
    category: category
}   

db.push(newItem);

res.json({
    success: true,
    data: newItem,
    message: 'New food item added successfully'
})

})



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
