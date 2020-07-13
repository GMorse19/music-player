import React, { useEffect, useState } from 'react'

import './Music.css'
import rock from './SchoolOfRock.m4a'

const Music = () => {
  const [track, setTrack] = useState('')

  useEffect(() => {
    setTrack(rock)
  }, [])

  console.log(track)

  return (
    <div className='container'>
      <p>Music Player</p>
      <audio id='player' src={track} controls />
    </div>
  )
}

export default Music
