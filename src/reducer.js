export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove token when finished developing
  // token:
  //   'BQBDCgwfmSiUD3acH8qJmLXxXVJyMcC_RrThOXMvH65umkqwJt…8Xeo5GkM7V6_xc0h7TKhcdzA2UqCKU-GMpXT-Xqm4i4wr5IX9',
  spotify: {},
  playlists: [],
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    default:
      return state
  }
}

export default reducer
