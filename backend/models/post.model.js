const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true    
  },
  content: {
    type: String    
  },
  author: {
    type: String,
    required: true,
    index: true
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    index: true
  },
  views: {
    type: Number,
    required: true
  },
  recommendation: {
    type: Number,
    required: true
  }  
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;