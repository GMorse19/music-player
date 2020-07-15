import React, { useEffect, useState } from 'react'

import './Music.css'
import rock from './SchoolOfRock.m4a'
import pledge from './Pledge.m4a'

const Music = () => {
  const [track, setTrack] = useState('')
  const [duration, setDuration] = useState('')
  const [curTime,setCurTime] = useState('')

  const audio = document.getElementById('player')

  useEffect(() => {
    setTrack(rock)

  const audio = document.getElementById('player')

  const setAudioData = () => {
    console.log(audio.duration)
      setDuration(audio.duration)
      setCurTime(audio.currentTime)
    }

    const setAudioTime = () => setCurTime(audio.currentTime)

    audio.addEventListener("loadeddata", setAudioData)

    audio.addEventListener("timeupdate", setAudioTime)
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
      <button onClick={() => audio.play()}>Play</button>
      <button onClick={() => audio.pause()}>Pause</button>
      {list}
      {duration}
      {curTime}
    </div>
  )
}

export default Music
