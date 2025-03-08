import { useState } from 'react'


export default function App() {
  // State to manage posts
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  
  // Function to add a post

  const addPost = () => {
    if(newPost.trim() === '') return;
    setPosts([{id: Date.now(), text: newPost}, ...posts]);
    setNewPost('');
  }

  return (
      <div>
        <h1>Simple Social Media App</h1>
        <textarea 
        rows="3" 
        placeholder="Write some words..." 
        value={newPost} 
        onChange={(e) => setNewPost(e.target.value)}
        />
        <br />
        <button onClick={addPost}>
          Add Post
          </button>

          {/*Display Posts*/}

          <div>
            {posts.length === 0 ? <p>No posts available.</p> : null}
            {posts.map((post) => (
                <div key={post.id}>
                  {post.text}
                </div>
            ))}
          </div>
      </div>

  )
}

