import React from 'react'
import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';


function Button(props) {
  const videoRef2 = props.video.current;
  let setCurrentTime = props.time;

    // 비디오 재생(play)
    const playVid = () => {
      videoRef2.play();
    }
    // 비디오 멈춤(pause)
    const pauseVid = () => {
      videoRef2.pause();
    }
    // 비디오 중단 & 처음으로 돌아가기(stop)
    const stopVid = () => {
      videoRef2.pause();
      setCurrentTime(0);
      videoRef2.load();
    }


  return (
    <div className='btn_gruop'>
      <button className='play' onClick={playVid}><FaPlay /></button>
      <button className='pause' onClick={pauseVid}><FaPause /></button>
      <button className='stop' onClick={stopVid}><FaStop/></button>
    </div>
  )
}

export default Button