function setLoginUser(username, token) {
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('token', token);
}

function getLoginUser() {
  const username = sessionStorage.getItem('username');
  const token = sessionStorage.getItem('token');

  if (username && token) {
    return {
      username: username,
      token: token
    }
  }
  else {
    return null;
  }
}

function removeLoginUser() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('token');
}

export { getLoginUser, setLoginUser, removeLoginUser };