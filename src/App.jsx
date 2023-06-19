import { useState, useRef, useEffect } from 'react'
import './App.css'
import Button from './components/Button';
import TimeInfo from './components/TimeInfo';
import Video from './components/Video';

function App() {
  
  const [duration, setDuration] = useState(0); // 영상길이
  const [currentTime, setCurrentTime] = useState(0); // 현재시간
  const videoRef = useRef();

  useEffect(()=>{
    setCurrentTime(Math.floor(videoRef.current.currentTime));

    const handleLoadMetadata = () => {
      setDuration(Math.floor(videoRef.current.duration));
    }
    videoRef.current.addEventListener('loadedmetadata', handleLoadMetadata);
    
    // 매 초마다 비디오 시간
    let videoInterval = setInterval(()=>{
      setCurrentTime(Math.floor(videoRef.current.currentTime));
    },1000);
    
    return () => clearInterval(videoInterval);

  },[currentTime]);


  return (
    <div className='App'>
      <h1>React Video Player</h1>
      <Video con={videoRef}/>
      <TimeInfo currentTime={currentTime} duration={duration}/>
      <Button video={videoRef} time={setCurrentTime}/>
    </div>
  )
}

export default App
