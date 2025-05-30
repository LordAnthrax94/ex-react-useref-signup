import { useState, useEffect, useRef, useMemo } from 'react'

function App() {

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
  
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [spec, setSpec] = useState('')
  const [years, setYears] = useState('')
  const [description, setDescription] = useState('')

  const validUsername = useMemo(() => {
   const charsValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    );
    return charsValid && username.length >= 6;
  }, [username]);

  const validPassword = useMemo(() => {    
    return (password.length >= 8 && password.split("").some(char => letters.includes(char.toLowerCase())) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char)));
  }, [password]);

  const validDescription = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000;
  }, [description]);

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (
      !name.trim() || 
      !username.trim() || 
      !password.trim() || 
      !spec.trim() ||
      !years.trim() || 
      years <= 0 || 
      !description.trim()
    ) {
      alert('Per favore, compila tutti i campi.')
      return;
    }
    console.log("Dati inviati:", {
      name,
      username,
      password,
      spec,
      years,
      description
    });    
  }

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
                {username.trim() && (
                  <p style={{ color: validUsername ? 'green' : 'red' }}>
                    {validUsername ? 'Username valido' : 'Username non valido. Deve contenere almeno 6 caratteri e solo lettere o numeri.'}
                  </p>
                )}
            </label>
            <label>
              <p>Scegli una password</p>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Inserire password' 
                />
                {password.trim() && (
                  <p style={{ color: validPassword ? 'green' : 'red' }}>
                    {validPassword ? 'Password valida' : 'Password non valida. Deve contenere almeno 8 caratteri, una lettera, un numero e un simbolo.'}
                  </p>
                )}
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
                {description.trim() && (
                  <p style={{ color: validDescription ? 'green' : 'red' }}>
                    {validDescription ? 'Descrizione valida' : 'Descrizione non valida. Deve contenere tra 100 e 1000 caratteri.'}
                  </p>
                )}
            </label> 
          <button type='Submit'>Invia Registrazione</button>
        </form>
        
      
    </div>
  )
}

export default App
