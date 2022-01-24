import './SidebarOptions.css'

function SidebarOptions({ option, Icon }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default SidebarOptions
