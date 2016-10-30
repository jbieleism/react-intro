import React from 'react';
import VideoListEntry from './video-list-entry'


const VideoList = (props) => {

  const videoList = props.videos.map((video) => {
    return <VideoListEntry key={ video.etag } video={ video }/>
  })

  return(
    <ul className="col-md-4 list-group">
      {videoList}
    </ul>
  )

}


export default VideoList;