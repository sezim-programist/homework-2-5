import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePostPage() {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleCreatePost = () => {
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: inputValue
            })
        }

        fetch("https://dummyjson.com/posts/", options).then(()=>{navigate("/")})
    }
  return (
    <div>
        <input onChange={(e)=>{setInputValue(e.target.value)}} type="text" />
        <button onClick={handleCreatePost}>create post</button>
    </div>
  )
}
