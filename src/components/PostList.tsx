import React from 'react';
import { Post } from './Post';
import { IPostsUpdate } from './interface'

type Props = {
  posts: IPostsUpdate[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
return (
  <>
    {posts.map(post => (
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
);}
