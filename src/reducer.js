export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  spotify: {},
  discoverWeekly: null,
}

const reducer = (state, action) => {
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
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      }
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      }
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      }
    default:
      return state
  }
}

export default reducer

// token:
//   'BQBDCgwfmSiUD3acH8qJmLXxXVJyMcC_RrThOXMvH65umkqwJt…8Xeo5GkM7V6_xc0h7TKhcdzA2UqCKU-GMpXT-Xqm4i4wr5IX9',
