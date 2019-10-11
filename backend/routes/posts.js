var router = require('express').Router();
var Post = require('../models/post.model');

/* Post CRUD */

// GET posts list
router.get('/', (req, res, next) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE post
router.post('/add', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const category = req.body.category;
  const views = req.body.views;
  const recommendation = req.body.recommendation;

  const newPost = new Post({ title, content, author, category, views, recommendation });
  (async () => {
    const savedPost = await newPost.save();
    res.json({ success: true, id: savedPost._id, message: 'Post added!' });
  })();
});

// GET post by id
router.get('/:category/:id', (req, res) => {  
  (async ()=>{
    const _id = req.params.id;
    const category = req.params.category;
    const post = await Post.findOne({
      _id: _id,
      category: category
    });
    res.json(post);
  })();
});

// GET post by category
router.get('/:category', (req, res) => {  
  (async () => {
    const category = req.params.category;
    const posts = await Post.find({ category: category }).select('title author recommendation views updatedAt').sort({'_id': -1});
    res.json(posts);
  })();
});

//  DELETE post
router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true, message: 'Post deleted!' }))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE post
router.post('/update/:id', (req, res) => {
  (async () => {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;
    post.category = req.body.category;
    post.views = req.body.views;
    post.recommendation = req.body.recommendation;

    const updatedPost = await post.save();
    res.json({ success: true, id: updatedPost._id, message: 'Post updated!' });
  })();
});

module.exports = router;