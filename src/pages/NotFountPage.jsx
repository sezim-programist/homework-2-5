import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFountPage() {
    const navigate = useNavigate()
const handleNavigate = () => {
    navigate('/')
}

  return (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <button onClick={handleNavigate}>go to main page</button>
    </div>
  )
}
