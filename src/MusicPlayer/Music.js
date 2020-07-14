import React, { useEffect, useState } from 'react'

import './Music.css'
import rock from './SchoolOfRock.m4a'
import pledge from './Pledge.m4a'

const Music = () => {
  const [track, setTrack] = useState('')

  useEffect(() => {
    setTrack(rock)
  }, [])

  const list = [{ id: 1, title: "SchoolOfRock", url: rock }, {id: 2, title: "Booting Up", url: pledge }].map(item => {
        return (
          <li
            key={item.id}
            onClick={() => setTrack(item.url)}
          >
          {item.title}
          </li>
        )
      })

  return (
    <div className='container'>
      <p>Music Player</p>
      <audio id='player' src={track} controls />
      {list}
    </div>
  )
}

export default Music
