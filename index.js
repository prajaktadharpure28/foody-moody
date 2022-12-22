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

    // check if the item already exists with the same id

    db.forEach((item) => {
        if (item.id === id) {
            return res.json({
                success: false,
                data: null,
                message: 'Item already exists'
            })
        }
    })

    

    db.push(newItem);

    res.json({
        success: true,
        data: newItem,
        message: 'New food item added successfully'
    })

})

app.get('/food-item-by-id', (req, res) => {

    // read the id from the query params

    const id = req.query.id;

    db.forEach((item) => {
        if (item.id == id) {
            return res.json({
                success: true,
                data: item,
                message: 'Food item fetched successfully'
            })
        }
    })
    res.json({
        success: false,
        data: null,
        message: 'Food item not found'
    })
})

app.get('/delete-food-item-by-id', (req, res) => {
    const id = req.query.id;

    db.forEach((item, index) => {
        if (item.id == id) {
            db.splice(index, 1);
            return res.json({
                success: true,
                data: db,
                message: 'Food item deleted successfully'
            })
        }
    })
    res.json({
        success: false,
        data: null,
        message: 'Food item not found'
    })
})





app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
