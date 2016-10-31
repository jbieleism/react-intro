import React from 'react';


const VideoListEntry = ({video}) => {

  const image = video.snippet.thumbnails.default.url;

  return (

    <li className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={image} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>

  )
}


export default VideoListEntry