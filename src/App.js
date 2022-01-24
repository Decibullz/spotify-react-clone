import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import { useDataLayerValue } from './DataLayer'
import { getToken } from './spotify'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getToken()
    // clears address bar removing access token from view
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      if (spotify) {
        dispatch({
          type: 'SET_SPOTIFY',
          spotify,
        })
      }

      // allows react to talk to spotify api
      spotify.setAccessToken(_token)

      // gets user info
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        })
      })
    }
  }, [])

  return <div className="app">{token ? <Player /> : <Login />}</div>
}

export default App
