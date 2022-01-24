import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import { useDataLayerValue } from '../../DataLayer'
import Header from '../Header/Header'
import SongRow from '../SongRow/SongRow'
import './Body.css'

function Body() {
  const [{ discoverWeekly }] = useDataLayerValue()
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
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow song={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
