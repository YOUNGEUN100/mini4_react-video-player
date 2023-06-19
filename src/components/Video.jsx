import React from 'react'

function Video(props) {
  const videoRef = props.con;

  return (
    <div className='videoST'>
      <video ref={videoRef} src='/media/spiderman_movie.mp4'/>
    </div>
  )
}

export default Video