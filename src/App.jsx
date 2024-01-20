import './App.css'
import {Routes, Route, NavLink} from "react-router-dom"
import PostsPage from './pages/PostsPage'
import CreatePostPage from './pages/CreatePostPage'
import NotFountPage from './pages/NotFountPage'

function App() {

  return (
    <>
      <ul style={{"display": "flex", "gap": "20px", "listStyle": "none", "justifyContent": "center"}}>
        <li>
          <NavLink to="/">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create Post</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<PostsPage/>} />
        <Route path="/create" element={<CreatePostPage/>} />
        <Route path="*" element={<NotFountPage/>} />
      </Routes>
    </>
    
  )
}

export default App
