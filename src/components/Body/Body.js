import { useDataLayerValue } from '../../DataLayer'
import Header from '../Header/Header'
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
      <div className="body_songs"></div>
    </div>
  )
}

export default Body
