import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';

function CustomProgressBar() {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  useEffect(() => {
    switch (location.pathname) {
      case '/vehicle-type':
        setCurrentStep(1);
        break;
      case '/food-type':
        setCurrentStep(2);
        break;
      case '/home-appliance':
        setCurrentStep(3);
        break;
      case '/current-unit':
        setCurrentStep(4);
        break;
      default:
        setCurrentStep(1);
    }
  }, [location]);

  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div style={{ 
        width: 89, 
        height: 89, 
        backgroundColor: "white", 
        borderRadius: "50%", 
        display: 'flex',             
        justifyContent: 'center',   
        alignItems: 'center',
        position:"relative",
       
        padding: '10px' // Adding padding for spacing
    }}>
      <CircularProgressbar
        value={percentage}
        strokeWidth= {12} 
        // text={`${currentStep}/${totalSteps}`}
        styles={buildStyles({
          rotation: 1, 
         strokeLinecap: "butt",
          textSize: '29px',
          pathTransitionDuration: 0.5,  
          pathColor: `rgba(255, 180, 84)`,  
          textColor: '#FF884C', 
          trailColor: '#FFEBD6', 
          backgroundColor: '#f3f4f6',
        
        })}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '19px',
          fontWeight: 800,
          color: '#FF884C',
          textAlign: 'center',
          letterSpacing:"1.5px"
        }}
      >
        {`${currentStep}/${totalSteps}`}
      </div>
    </div>
  );
}

export default CustomProgressBar;
