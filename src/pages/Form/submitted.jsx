import React from "react";
import vidioee from '../../assets/success.mp4'
import image from '../../assets/poster.png';
import back from '../../assets/triangle.png'
import './form.css';

function Submitted() {
  return (
    <div className='first'>
      <div className="back">
      <img  src={back} className="triangle-oval"/>
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
      </div>
    </div>
  );
}

export default Submitted;
