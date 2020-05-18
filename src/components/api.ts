export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
};

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
};

export const getComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json());
};
