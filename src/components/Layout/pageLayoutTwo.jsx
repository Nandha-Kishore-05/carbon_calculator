import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import Backimg1 from "../../assets/backimg1.png";
import Backimg2 from "../../assets/backimg2.png";
import Backimg3 from "../../assets/backimg3.png";
import Backimg4 from "../../assets/backimg4.png";

function PageLayoutTwo({ children }) {
  const location = useLocation();

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
      // case '/carbon-footprint':
      // return Backimg5;
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
            
            <Grid2 container justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
              <Grid2 item>
                <Paper
                  sx={{
                    backgroundColor: 'white',
                    height: 450,
                    width: 400,
                    padding: 2,
                    borderTopLeftRadius: 40, 
                    borderTopRightRadius: 40, 
                    borderBottomLeftRadius: 10, 
                    borderBottomRightRadius: 10, 
                    marginTop: 42, 
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
