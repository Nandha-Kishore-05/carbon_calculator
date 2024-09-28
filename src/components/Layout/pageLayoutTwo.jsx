import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import Backimg1 from "../../assets/backimg1.png";
import Backimg2 from "../../assets/backimg2.png";
import Backimg3 from "../../assets/backimg3.png";
import Backimg4 from "../../assets/backimg4.png";
import homelogo_nobg from "../../assets/homelogo_nobg.png"; // Import your image here

function PageLayoutTwo({ children }) {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/vehicle-type':
      case '/no-of-vehicle':
      case '/fuel-type':
      case '/kilometer':
        return Backimg1;
      case '/food-type':
        return Backimg2;
      case '/home-appliance':
        return Backimg3;
      case '/current-unit':
        return Backimg4;
      default:
        return null; // Optional: return a default image or null
    }
  };

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
            <Grid2 container justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  position: 'absolute',
                  top: '48px',
                  left: '135px',
                  width: '192px',
                  height: '21px',
                }}
              >
                <svg width="18" height="16" style={{ marginRight: '10px' }} viewBox="0 0 40 40">
                  <path
                    d="M20 5 L35 30 A3 3 0 0 1 32 34 H8 A3 3 0 0 1 5 30 Z"
                    fill="#DF2929"
                  />
                </svg>

                <p
                  style={{
                    textAlign: 'left',
                    fontFamily: 'Excon, sans-serif',
                    fontWeight: '550',
                    fontSize: '16px',
                    lineHeight: '23px',
                    letterSpacing: '-0.08px',
                    color: '#030911',
                    margin: 0,
                  }}
                >
                  15.90 ton CO2
                </p>
              </div>
              <Grid2 item sx={{ 
                  width: '400px', // Maintain width
                  height: '450px', // Maintain height
                  backgroundImage: `url(${homelogo_nobg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain', // Adjust size to fit
                  backgroundPosition: 'center', // Center the image
                  display: 'flex',
                  justifyContent: 'center', // Center content inside
                  alignItems: 'center', // Center content vertically
                  marginTop: 46,
                  
                  
              }}>
                <Paper
                  sx={{
                    // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: make it slightly transparent to show background
                    height: '100%',
                    width: '100%',
                    padding: 1,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    
                  }}
                >
                  {children}
                </Paper>
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default PageLayoutTwo;
