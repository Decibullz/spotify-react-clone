import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import { useDataLayerValue } from '../../DataLayer'
import Header from '../Header/Header'
import SongRow from '../SongRow/SongRow'
import './Body.css'

function Body() {
  const [{ spotify, discoverWeekly }, dispatch] = useDataLayerValue()

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${discoverWeekly.id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          })
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          })
        })
      })
  }
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          })
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          })
        })
      })
  }

  return (
    <div className="body">
      <Header />
      <div className="body_info">
        <img src={discoverWeekly?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>{discoverWeekly?.type}</strong>
          <h2>{discoverWeekly?.name}</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled onClick={playPlaylist} className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} song={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  )
}

export default Body
