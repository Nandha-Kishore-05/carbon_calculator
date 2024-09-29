import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import Backimg1 from "../../assets/backimg1.png";
import Backimg2 from "../../assets/backimg2.png";
import Backimg3 from "../../assets/backimg3.png";
import Backimg4 from "../../assets/backimg4.png";
import { Typography } from '@mui/material';
import CustomProgressBar from '../ProgressBar/CustomProgressBar';
import HomeImg from "../../assets/homeimg1.png"; 

function PageLayoutTwo({ children }) {
  const location = useLocation();
  const totalSteps = 4;
  let currentStep = 1;
  switch (location.pathname) {
    case '/vehicle-type':
      currentStep = 1;
      break;
    case '/food-type':
      currentStep = 2;
      break;
    case '/home-appliance':
      currentStep = 3;
      break;
    case '/current-unit':
      currentStep = 4;
      break;
    default:
      currentStep = 1;
  }


  const getBackgroundImage = () => {
    switch(location.pathname){
    case '/vehicle-type':
      return Backimg1;
    case '/no-of-vehicle':
      return Backimg1;
    case '/fuel-type':
      return Backimg1;
    case '/kilometer':
      return Backimg1;
    case '/food-type':
      return Backimg2;
      case '/home-appliance':
      return Backimg3;
      case '/current-unit':
      return Backimg4;
      
    }
  }

  
  return (
    <Container>
    
      <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid2 item>
          
        
          <Paper
            sx={{
              backgroundColor: '#d9ebfa',  
              backgroundImage: `url(${getBackgroundImage()})`, 
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 50%',
              backgroundPosition: 'top',
              height: 787,
              width: 400,
              padding: 0,  
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Grid2 container justifyContent="center" sx={{ marginTop: 40, zIndex:2}}>
              <CustomProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            </Grid2>
            {/* <Typography variant='body1' position='sticky' sx={{fontSize:"20px",}}>15.90 ton co2</Typography> */}

           
            <Grid2 container justifyContent="center" sx={{ position: 'absolute', zIndex: 1 }}>
            <Grid2 container justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
            <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  position: 'absolute',
                  top: '48px',
                  left: '125px',
                  width: '192px',
                  height: '21px',
                }}
              >
                <svg width="18" height="18" style={{ marginRight: '1px' }} viewBox="0 0 40 40">
                  <path
                    d="M20 5 L35 30 A3 3 0 0 1 32 34 H8 A3 3 0 0 1 5 30 Z"
                    fill="#DF2929"
                  />
                </svg>

                <span
  style={{
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    fontWeight: '800',
    fontSize: '16px',
    lineHeight: '23px',
    // letterSpacing: '0.5px',
    color: '#030911',
    margin: 0,
  }}
>
  15.90 ton CO2
</span>
              </div>
              <Grid2 item sx={{width: '400px', 
                  height: '450px', 
                  display: 'flex',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  marginTop: 45,
              }}>
                <Paper
                  sx={{
                    height: '100%',
                    width: '100%',
                    padding: 1,
                    // backgroundImage: `url(${HomeImg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain', 
                  backgroundPosition: 'bottom',
                  opacity:10,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                   {/* <CustomProgressBar /> */}
                  {children}
                </Paper>
              </Grid2>
            </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default PageLayoutTwo;
