import React, { useState, useEffect } from 'react';
import { backendBaseUrl } from '../config';
import { Link } from 'react-router-dom'

export default function Post(props) {
  const [post, setPost] = useState(null);

  const {category, id} = props.match.params;

  useEffect(() => {
    (async () => {
      const response = await fetch(`${backendBaseUrl}/posts/${category}/${id}`);
      const newPost = await response.json();
      setPost(newPost);
    })();
  }, [id]);

  const handleClickDelete = (e) => {
    e.preventDefault();
    if(window.confirm('Are you sure you want to delete it?')){
      (async () => {
        const url = `${backendBaseUrl}/posts/${id}`;
        const reqOpt = {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          // headers: {
          //   'Content-Type': 'application/json',
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
          // },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
        const response = await fetch(url, reqOpt);
        const result = await response.json();
        console.log(result.success);
        if (result.success) {
          console.log('delete success.');
          props.history.push(`/board/${category}`);
        }
        else{
          console.log('delete fail.');
        }
      })();
    }
  }

  if (post) {
    return (
      <div>
        <div>
          <h2>{post.title}</h2>
          <h3>{post.author}</h3>
          <p>{post.content}</p>
        </div>
        <div>
          <ul style={{listStyle:'none', paddingInlineStart: 0}}>
            <li><Link to={`/board/${category}/modify/${id}`}>Modify</Link></li>
            <li><Link to="/" onClick={handleClickDelete}>Delete</Link></li>
            <li><Link to={`/board/${category}`}>List View</Link></li>
          </ul>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}