import React from 'react';

export default function InputPost(props) {
  const {category, title, author, content, handleChange, handleClick} = props;

  return (
    <div>
      <h2>{category}</h2>
      <div>
        <table className="write-table">
          <tbody>
            <tr className="write-table-row">
              <td className="desc">Title</td>
              <td><input type="text" name="title" onChange={handleChange} value={title} /></td>
            </tr>
            <tr className="write-table-row">
              <td className="desc">Author</td>
              <td><input type="text" name="author" onChange={handleChange} value={author} /></td>
            </tr>
            <tr className="write-table-row">
              <td className="desc">Content</td>
              <td><textarea name="content" cols="" rows="15" onChange={handleChange} value={content}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <a href="/" onClick={handleClick}>Complete</a>
      </div>
    </div>
  );
}