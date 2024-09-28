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
    <div style={{ width: 100, height: 100 ,backgroundColor:"white",borderRadius:"50% 50%"}}>
      <CircularProgressbar
        value={percentage}
        text={`${currentStep}/${totalSteps}`}
        styles={buildStyles({
          rotation: 0.,
          strokeLinecap: 'round',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: `rgba(230, 95, 11)`, 
          textColor: '#e65f0b', 
          trailColor: '#d6d6d6',
          backgroundColor: '#e65f0b',
        })}
      />
    </div>
  );
}

export default CustomProgressBar;
