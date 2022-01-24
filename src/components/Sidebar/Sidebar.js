import SidebarOptions from '../SidebarOptions/SidebarOptions'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

import './Sidebar.css'
import { useDataLayerValue } from '../../DataLayer'
function Sidebar() {
  const [{ playlists }] = useDataLayerValue()
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={HomeOutlinedIcon} option="Home" />
      <SidebarOptions Icon={SearchIcon} option="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      {/* <strong className="sidebar_title">PLAYLISTS</strong> */}
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions option={playlist.name} key={playlist.id} />
      ))}
    </div>
  )
}

export default Sidebar
