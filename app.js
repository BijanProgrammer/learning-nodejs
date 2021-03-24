const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.listen(5000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'First Blog', tag: 'html'},
        {title: 'Second Blog', tag: 'css'},
        {title: 'Third Blog', tag: 'js'},
    ];
    
    res.render('index', {title: 'Home', blogs});
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Add Blog'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: 'Not Found'});
});
