export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'https://csspotifyclone.netlify.app/'
// const redirectUri = 'http://localhost:3000/'
const clientId = 'ba58c023d24e4da1a620be7d2bf62384'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-read-private',
]

export const getToken = () => {
  // returns token from address bar
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`
