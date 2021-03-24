const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.listen(5000);

app.use(express.static('public'));

const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dolore eligendi est exercitationem fuga, in laborum libero maiores nesciunt nisi officiis quas quidem quis ratione reprehenderit repudiandae sint, sunt tempora ullam ut vel voluptas! Ab adipisci asperiores aspernatur blanditiis commodi consequuntur cum delectus deleniti dolores eius eos est eveniet exercitationem expedita fuga harum id ipsa itaque, iure magnam minima neque nesciunt nihil nisi nostrum obcaecati officiis optio repellendus rerum sit ullam vel veritatis, voluptatibus? A, ab accusamus adipisci consequuntur deleniti dolorem eligendi est excepturi explicabo fugiat incidunt laudantium, libero minima mollitia nostrum officiis, placeat quasi reprehenderit rerum ullam voluptates!';

app.get('/', (req, res) => {
    const blogs = [
        {title: 'First Blog', tag: 'html', body},
        {title: 'Second Blog', tag: 'css', body},
        {title: 'Third Blog', tag: 'js', body},
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
