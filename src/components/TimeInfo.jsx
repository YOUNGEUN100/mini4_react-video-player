import React from 'react'

function TimeInfo(props) {
  // console.log(props);
  const currentTime = props.currentTime;
  const duration = props.duration;

  return (
    <div className='time_info'>
        <p>{Math.floor(currentTime/60)}:{currentTime%60} / {Math.floor(duration/60)}:{duration%60}</p>
        <progress value={currentTime?? currentTime/duration*100} min="0" max="100" className='bar'/>
    </div>
  )
}

export default TimeInfo