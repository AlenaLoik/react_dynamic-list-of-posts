import React, { useState } from 'react';

import './App.css';
import { PostList } from './components/PostList';
import { getComments, getUsers, getPosts } from './components/api';
import { IPost, IComment, IUser, IPostsUpdate } from './components/interface';

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPostsUpdate[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const loadAllPosts = () => {
    let preperedPosts: IPostsUpdate[] = [];

    Promise.all([getPosts(), getComments(), getUsers()])
      .then(([posts, comments, users]) => {
        preperedPosts = posts.map((post: IPost) => ({
          ...post,
          comments: comments.filter((comment: IComment) => comment.postId === post.id),
          user: users.find((user: IUser) => (
            user.id === post.userId)),
        }));
      }).then(() => {
        setPosts(preperedPosts);
        setLoading(false);
        setLoaded(true);
      });
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      loadAllPosts();
    }, 1000);
  };

  return (
    <body className="container">
      <h1 className="header">Posts</h1>
      {!isLoaded ? (
        <button
          type="button"
          className="button__load"
          onClick={handleLoading}>
          {isLoading ? 'Loading...' : 'Load'}
        </button>
      ) : (
          <PostList posts={posts} />
        )}
    </body>
  )
};

export default App;
