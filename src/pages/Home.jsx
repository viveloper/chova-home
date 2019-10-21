import React from 'react';
import { getLoginUser } from '../modules/LoginUser';

export default function Home() {
  const loginUser = getLoginUser();

  if (loginUser) {
    return (
      <h2>Hello, {loginUser.username}</h2>
    );
  }
  else {
    return (
      <h2>Welcome</h2>
    );
  }
}