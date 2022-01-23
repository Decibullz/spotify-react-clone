import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { getToken } from './spotify'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getToken()
    // clears address bar removing access token from view
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
    }
  }, [])

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>
}

export default App
