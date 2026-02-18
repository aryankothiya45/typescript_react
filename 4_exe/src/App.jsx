import { useState } from 'react'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import ClockContainer from './CLock/ClockContainer'
import DocumentTitleApp from './DocumentTitleApp/DocumentTitleApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoPlayer />
      <hr />
      <ClockContainer />
      <hr />
      <DocumentTitleApp />
    </>
  );
}

export default App
