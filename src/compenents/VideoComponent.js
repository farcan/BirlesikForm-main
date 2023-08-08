import React from 'react';
import Video from '../video.mp4';
import './video.css';

const VideoComponent = () => {


  return (
    <div className="video-container">
      <video controls autoPlay>
        <source src={Video} type="video/mp4" />
        {/* Diğer video formatları için alternatif kaynakları da ekleyebilirsiniz */}
        {/* <source src="/path/to/your/animation.webm" type="video/webm" /> */}
        {/* <source src="/path/to/your/animation.ogg" type="video/ogg" /> */}
        Video content not supported by your browser.
      </video>
    </div>
  );
};

export default VideoComponent;




