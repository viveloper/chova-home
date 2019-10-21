import React, { useState, useEffect } from 'react';
import { backendBaseUrl } from '../config';
import { Link } from 'react-router-dom';
import { parseObjectId } from '../modules/utilities';
import './Board.css';

export default function Board(props) {
  const [posts, setPosts] = useState([]);

  const category = props.match.params.category;

  const fetchPosts = async () => {
    const response = await fetch(`${backendBaseUrl}/posts/${category}`);
    const newPosts = await response.json();
    setPosts(newPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, [category]);

  if (posts.length > 0) {
    const rows = posts.map((post) => {
      const updatedAt = (new Date(post.updatedAt)).toLocaleString();
      const { counter } = parseObjectId(post._id);
      return (
        <tr key={post._id}>
          <td>{counter}</td>
          <td className="board-title"><Link to={`/board/${category}/${post._id}`}>{post.title}</Link></td>
          <td>{post.author}</td>
          <td>{updatedAt}</td>
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
          <Link to={`/board/${category}/write`}>Write</Link>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <h2>{category}</h2>
        <div>          
          <Link to={`/board/${category}/write`}>Write</Link>
        </div>
      </>
    );
  }
}