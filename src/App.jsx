import { useState, useEffect, useRef } from 'react''
import './App.css'

function App() {
  
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [spec, setSpec] = useState('')
  const [years, setYears] = useState('')
  const [description, setDescription] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()
  }
    
  

  return (
    <div>
      <h1>Web-developer Sign-up</h1>
        <form onSubmit={handlerSubmit}>
          <label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input 
              type="text"
              value={username} 
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Username'
            />
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' 
            />
            <select name="" id=""></select>

          </label>
        </form>
        
      
    </div>
  )
}

export default App
