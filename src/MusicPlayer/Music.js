import React from 'react'

import './Music.css'
import rock from './SchoolOfRock.m4a'

const Music = () => {
  return (
    <div className='container'>
      <p>Music Player</p>
      <audio className='music-player' controls>
        <source src={rock} type='audio/mpeg'/>
      </audio>
    </div>
  )
}

export default Music
