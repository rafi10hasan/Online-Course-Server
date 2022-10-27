const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const categories=require('./data/categories.json');
const details=require('./data/course.json')

app.get('/', (req, res) => {
    res.send('News API Running rafi');
});

app.get('/courses-categories',(req,res)=>{
    res.send(categories);
})

app.get('/course-details', (req, res) =>{
    res.send(details);
});

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedDetails = details.find(n => n._id === id);
    res.send(selectedDetails);
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
