import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css'
import Login from './components/Login/Login'
import { getToken } from './spotify'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getToken()
    // clears address bar removing access token from view
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      // allows react to talk to spotify api
      spotify.setAccessToken(_token)

      // gets user info
      spotify.getMe().then((user) => {
        console.log(user)
      })
    }
  }, [])

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>
}

export default App
