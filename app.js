const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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
    res.redirect('/blogs');
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: 'Not Found'});
});
