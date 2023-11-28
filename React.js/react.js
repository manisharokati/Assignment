import React, { useState, useEffect } from 'react';
const BlogPostList = () => {State to store the list of blog posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            <button onClick={() => viewFullPost(post.id)}>View Full Post</button>
          </li>
        ))}
      </ul>
    </div>
  );
  const viewFullPost = (postId) => {
    console.log(`Viewing full post with ID ${postId}`);
  };
};

export default BlogPostList;
