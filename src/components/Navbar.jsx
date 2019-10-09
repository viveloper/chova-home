import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">LOGO</Link></div>
      <Link to="/">Home</Link>
      <div className="dropdown">
        <button className="dropbtn">{'Board '}
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/board/Free">Free</Link>
          <Link to="/board/Programming">Programming</Link>
          <Link to="/board/Camera">Camera</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">{'Albums '}
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/albums/2019">2019</Link>
          <Link to="/albums/2018">2018</Link>
          <Link to="/albums/2017">2017</Link>
          <Link to="/albums/Portugal">Portugal</Link>
          <Link to="/albums/LA">LA</Link>
          <Link to="/albums/Taiwan">Taiwan</Link>
        </div>
      </div>
      <Link to="/calendar">Calendar</Link>
      <div className="login-area">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}