const express = require('express');
const port = 5000;

const cors = require('cors');


const categories = require('./data/categories.json')
const news = require('./data/news.json')

const app = (express());

app.use(cors());


app.get('/', (req, res) => {
    res.send('server running')
})


app.get('/categories', (req, res) => {
    res.send(categories);
})


app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    currentNews = news.find(cNews => cNews._id == id);
    // console.log(currentNews)
    if (currentNews) {
        res.send(currentNews);
    }
    else {
        res.send({ status: false, data: 'not found' })
    }
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    currentNews = news.filter(cNews => cNews.category_id == id);
    // console.log(currentNews)
    if (id == 0) {
        res.send(news);
    }
    else {
        if (currentNews.length > 0) {
            res.send(currentNews);
        }
        else {
            res.send([])
        }
    }
})

app.listen(port, () => {
    console.log('this application running on this port :', port)
})