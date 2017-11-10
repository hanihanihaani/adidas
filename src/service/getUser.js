const saveUser = function(username) {
  sessionStorage.setItem('user',username);
}

const getUser = function() {
  return sessionStorage.getItem('user');
}

const removeUser = function() {
  sessionStorage.removeUser('user');
}

export {getUser,saveUser,removeUser};