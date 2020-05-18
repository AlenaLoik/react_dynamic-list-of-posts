import React, { useState, useMemo, useCallback } from 'react';
import { Post } from './Post';
import { IPostsUpdate } from './interface';
import debounce from 'lodash.debounce';

type Props = {
  posts: IPostsUpdate[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  const [filterPosts, setFilter] = useState('');
  const [serchKeyword, setKeyword] = useState('');

  const viewPosts = useMemo(() => {
    const pattern = new RegExp(filterPosts, 'i');

    return posts.filter(({body, title}) => pattern.test(body + title));
  }, [posts, filterPosts]);

  const setFilterPostsDebounce = useCallback(
    debounce(setFilter, 1000),
    [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    setFilterPostsDebounce(event.target.value);
  };

  return (
    <>
      <label className="search">
        <input
          value={serchKeyword}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type to search"
          onChange={handleChange}
        />
        <button  className="button__subm">
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-search fa-w-16" role="img" aria-hidden="true" viewBox="0 0 512 512" focusable="false" data-icon="search" data-prefix="fas"><path fill="currentColor" d="M 505 442.7 L 405.3 343 c -4.5 -4.5 -10.6 -7 -17 -7 H 372 c 27.6 -35.3 44 -79.7 44 -128 C 416 93.1 322.9 0 208 0 S 0 93.1 0 208 s 93.1 208 208 208 c 48.3 0 92.7 -16.4 128 -44 v 16.3 c 0 6.4 2.5 12.5 7 17 l 99.7 99.7 c 9.4 9.4 24.6 9.4 33.9 0 l 28.3 -28.3 c 9.4 -9.4 9.4 -24.6 0.1 -34 Z M 208 336 c -70.7 0 -128 -57.2 -128 -128 c 0 -70.7 57.2 -128 128 -128 c 70.7 0 128 57.2 128 128 c 0 70.7 -57.2 128 -128 128 Z" /></svg>
        </button>
      </label>
      <p className="count__posts">Post: {viewPosts.length}</p>
      {viewPosts.map(post => (
        <article className="article" key={post.id}>
          <div className="article__main-info">
            <Post
              title={post.title}
              body={post.body}
              userInfo={post.user}
              comments={post.comments}
            />
          </div>
        </article>
      ))}
    </>
  );
}
