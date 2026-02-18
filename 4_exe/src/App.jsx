import { useState } from 'react'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import ClockContainer from './CLock/ClockContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoPlayer />
      <hr />
      <ClockContainer />
    </>
  );
}

export default App
