import React, { useState, useEffect } from 'react';
import { backendBaseUrl } from '../config';
import { Link } from 'react-router-dom';
import './Board.css';

export default function Board(props) {
  const category = props.match.params.category;
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const response = await fetch(`${backendBaseUrl}/board/${props.match.params.category}`);
    const newPosts = await response.json();
    setPosts(newPosts);
  }

  useEffect(() => {
    fetchPosts();
    console.log('userEffect');
  }, [category]);

  const handleClickUpdate = (e) => {
    e.preventDefault();
    fetchPosts();
  }

  console.log('render');
  if (posts) {
    const rows = posts.map((post) => {
      return (
        <tr key={post.key}>
          <td>{post.key}</td>
          <td className="board-title"><Link to={`/board/${category}/${post.key}`}>{post.title}</Link></td>
          <td>{post.author}</td>
          <td>{post.updateTime}</td>
          <td>{post.recommendation}</td>
          <td>{post.views}</td>
        </tr>
      );
    });
    return (
      <>
        <h2>{category}</h2>
        <div>
          <table className="table-board">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Time</th>
                <th>Recommend</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        <div>
          <a href="/" onClick={handleClickUpdate}>refresh</a>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <h2>loading...</h2>
      </>
    );
  }
}