import React, { useState } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Board from './pages/Board';
import Write from './pages/Write';
import Modify from './pages/Modify';
import Post from './pages/Post';
import Albums from './pages/Albums';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { getLoginUser, removeLoginUser } from './modules/LoginUser';

export default function App() {  
  const [user, setUser] = useState(getLoginUser());
  
  const handleLogin = () => {
    setUser(getLoginUser());
  }
  const handleLogout = () => {
    removeLoginUser();
    setUser(getLoginUser());
  }
  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/board/:category" exact render={(props) => <Board {...props} />} />
        <Route path="/board/:category/write" render={(props) => <Write {...props} />} />
        <Route path="/board/:category/modify/:id" render={(props) => <Modify {...props} />} />
        <Route path="/board/:category/:id" render={(props) => <Post {...props} />} />
        <Route path="/albums" exact render={(props) => <Albums {...props} />} />
        <Route path="/albums/:category" render={(props) => <Albums {...props} />} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
