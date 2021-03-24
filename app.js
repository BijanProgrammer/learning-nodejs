const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express & ejs
const app = express();
app.set('view engine', 'ejs');

// mongodb
const DATABASE_URL = 'mongodb+srv://root:1234@myfirstcluster.q5ulo.mongodb.net/learning-nodejs?retryWrites=true&w=majority';
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Successfully connected to database ...');
        app.listen(5000, () => console.log('Listening on port 5000 ...'));
    })
    .catch((err) => console.log('Error (Database):', err));

// middleware & static files like css
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// routes
app.get('/', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', {title: 'Home', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });
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

app.post('/blogs/create', (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.use((req, res) => {
    res.status(404).render('404', {title: 'Not Found'});
});
