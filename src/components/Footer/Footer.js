import './Footer.css'
import {
  PlayCircleFilled,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  PauseCircleFilledOutlined,
} from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'
import { useEffect } from 'react'
import { useDataLayerValue } from '../../DataLayer'

function Footer() {
  const [{ spotify, playing, item }, dispatch] = useDataLayerValue()

  useEffect(() => {
    spotify
      .getMyCurrentPlaybackState()
      .then((r) => {
        dispatch({
          type: 'SET_PLAYING',
          playing: r.is_playing,
        })

        dispatch({
          type: 'SET_ITEM',
          item: r.item,
        })
      })
      .catch((error) => {
        console.error(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item])

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause()
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      })
    } else {
      spotify.play()
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      }).catch((error) => {
        console.error(error)
      })
    }
  }

  const skipNext = () => {
    spotify.skipToNext()
    spotify
      .getMyCurrentPlayingTrack()
      .then((r) => {
        dispatch({
          type: 'SET_ITEM',
          item: r.item,
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const skipPrevious = () => {
    spotify.skipToPrevious()
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: 'SET_ITEM',
        item: r.item,
      }).catch((error) => {
        console.error(error)
      })
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      }).catch((error) => {
        console.error(error)
      })
    })
  }

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumImg"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer_songInfo">
            <h5>{item.name}</h5>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer_center">
        <Shuffle className="footer_icon" />
        <SkipPrevious onClick={skipPrevious} className="footer_icon" />
        {playing ? (
          <PauseCircleFilledOutlined
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_playIcon"
          />
        ) : (
          <PlayCircleFilled
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_playIcon"
          />
        )}
        <SkipNext onClick={skipNext} className="footer_icon" />
        <Repeat className="footer_icon" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2} className="footer_grid">
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown className="footer_volume" />
          </Grid>
          <Grid item xs>
            <Slider className="footer_volume" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
