import React, { useEffect, useState } from 'react'

export default function PostsPage() {
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        fetch("https://dummyjson.com/posts").then(response => response.json()).then(data => setPosts(data.posts))
    }
    useEffect(()=> {
        fetchPosts()
    }, [])
  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => (
                <li>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}
