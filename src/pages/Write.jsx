import React, { useState } from 'react';
import { backendBaseUrl } from '../config';
import InputPost from '../components/InputPost';
import './Write.css';

export default function Write(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const category = props.match.params.category;

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    else if (e.target.name === "author") {
      setAuthor(e.target.value);
    }
    else if (e.target.name === "content") {
      setContent(e.target.value);
    }
    else { }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      author: author,
      content: content,
      category: category,
      views: 1,
      recommendation: 0
    };
    (async () => {
      const url = `${backendBaseUrl}/posts/add`;
      const reqOpt = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      };
      const response = await fetch(url, reqOpt);
      const result = await response.json();      
      if (result.success) {        
        props.history.push(`/board/${category}/${result.id}`);
      }
      else{
        alert('Posting failure.');
      }

    })();
  }

  return (
    <InputPost category={category} title={title} author={author} content={content} handleChange={handleChange} handleClick={handleClick} />
  );

}