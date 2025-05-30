import { useState, useEffect, useRef } from 'react'

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

  const validationForm = 
    
  

  return (
    <div>
      <h1>Web-developer Sign-up</h1>
        <form onSubmit={handlerSubmit}>
          <label>
              <p>Nome Completo</p>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Inserisci nome completo"
                />
            </label>
            <label>
              <p>Scegli il tuo username</p>
                <input 
                  type="text"
                  value={username} 
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder='Inserisci un username'
                />
            </label>
            <label>
              <p>Scegli una password</p>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Inserire password' 
                />
            </label>
            <label>
                <p>Seleziona Specializzazione</p>
                  <select              
                    value={spec}
                    onChange={(e) => setSpec(e.target.value)} 
                  >
                    <option value="">-- Seleziona --</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Fullstack</option>
                  </select>
            </label>
            <label>
              <p>Inserisci Anni di Esperienza</p>
                <input 
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder='Inserisci anni di esperienza'
                />
            </label>
            <label>
              <p>Inserisci la tua descrizione</p>
                <textarea 
                  value={description} 
                  onChange={e => setDescription(e.target.value)} 
                /> 
            </label>           

          
        </form>
        
      
    </div>
  )
}

export default App
