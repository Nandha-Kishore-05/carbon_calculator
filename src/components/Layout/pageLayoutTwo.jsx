import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

function PageLayoutTwo({ children }) {
  return (
    <Container>
     
      <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid2 item>
        
          <Paper
            sx={{
              backgroundColor: '#d9ebfa',  
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
                  left: '138px',
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
                    fontWeight: 'bold',
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
              <Grid2 item>
                <Paper
                  sx={{
                    backgroundColor: 'white',
                    height: 450,
                    width: 400,
                    padding: 2,
                    borderTopLeftRadius: 20, 
                    borderTopRightRadius: 20, 
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
