import { useDataLayerValue } from '../../DataLayer'
import './Header.css'
import { Search } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

function Header() {
  const [{ user }] = useDataLayerValue()

  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input placeholder="Artists, songs, or podcasts" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="cs" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
