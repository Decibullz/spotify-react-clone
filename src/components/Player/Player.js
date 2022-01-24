import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import './Player.css'

function Player() {
  const [{ spotify }] = useDataLayerValue()
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />

        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default Player
