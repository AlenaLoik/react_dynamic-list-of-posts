import React, { useState } from 'react';

import './App.css';
import { PostList } from './components/PostList';
import { getComments, getUsers, getPosts } from './components/api';
import { IPost, IComment, IUser, IPostsUpdate } from './components/interface';

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPostsUpdate[]>([]);
  const [vievPosts, setFilterPost] = useState<IPostsUpdate[]>([]);
  const [serchKeyword, setKeyword] = useState('');
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
        setFilterPost(preperedPosts);
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

 const startSearch = () => {
  let filterPost = [...posts].filter(post => (
    post.title.toLowerCase().includes(serchKeyword)
    || post.body.toLowerCase().includes(serchKeyword)
  ))

  setFilterPost(filterPost);
 }

  return (
    <>
      <h1>Posts</h1>
      {!isLoaded ? (
        <button
          type="button"
          className="button__load"
          onClick={handleLoading}>
          {isLoading ? 'Loading...' : 'Load'}
        </button>
      ) : (
          <div className="control">
            <label className="search">
            <input
                value = {serchKeyword}
                type="search"
                id="search-query"
                className="input"
                placeholder="Type to search"
                onChange={(e) => {setKeyword(e.target.value)}}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    startSearch();
                  }
                }
                }
              />
              <button onClick={startSearch} className="button__subm">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-search fa-w-16" role="img" aria-hidden="true" viewBox="0 0 512 512" focusable="false" data-icon="search" data-prefix="fas"><path fill="currentColor" d="M 505 442.7 L 405.3 343 c -4.5 -4.5 -10.6 -7 -17 -7 H 372 c 27.6 -35.3 44 -79.7 44 -128 C 416 93.1 322.9 0 208 0 S 0 93.1 0 208 s 93.1 208 208 208 c 48.3 0 92.7 -16.4 128 -44 v 16.3 c 0 6.4 2.5 12.5 7 17 l 99.7 99.7 c 9.4 9.4 24.6 9.4 33.9 0 l 28.3 -28.3 c 9.4 -9.4 9.4 -24.6 0.1 -34 Z M 208 336 c -70.7 0 -128 -57.2 -128 -128 c 0 -70.7 57.2 -128 128 -128 c 70.7 0 128 57.2 128 128 c 0 70.7 -57.2 128 -128 128 Z" /></svg>
              </button>
            </label>
            <p className="count__posts">Post: {vievPosts.length}</p>
            <PostList posts={vievPosts} />
          </div>

        )}
    </>
  )
};

export default App;
