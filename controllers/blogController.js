const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('blogs/index', {title: 'Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Add Blog'});
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
};
