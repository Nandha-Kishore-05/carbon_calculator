import React from "react";
import vidioee from '../../assets/success.mp4'
import image from '../../assets/poster.png';
import './form.css';

function Submitted() {
  return (
    <div className='first'>
      <div className="ani-1"></div>
      <div className="ani-2"></div>
      <video
        className="vidio"
        src={vidioee}
        type="video/mp4"
        poster={image} 
        width="139"
        height="139"
        autoPlay
        muted
      />
      <div className="text-1">Form submitted successfully</div>
      <div className="ani-3"></div>
      <div className="ani-4"></div>
      <div className="ani-5"></div>
    </div>
  );
}

export default Submitted;
