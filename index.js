import express from 'express';

const app = express();

app.get('/coffee', (req, res) => {
    res.send({
        message: 'Coffee is good'
    });
})

app.get('/tea', (req, res) => {
    res.send({
        message: 'Tea is healthy'
    });
})

app.listen(5000, () => {
    console.log('Listening on port 5000');
}
);

