import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import zIndex from '@mui/material/styles/zIndex';

function PageLayoutTwo({ children }) {
  return (
    <Container>
      <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid2 item>
          
          <Paper
            sx={{
              height: 730,
              width: 400,
              backgroundColor:'#f0bebb',
              // padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
        
            <Grid2 container justifyContent="center">
              <Grid2 item>
                <Paper
                  sx={{
                    backgroundColor:'white',
                    height: 450,
                    width: 400,
                    padding: 2,
                    marginTop: 43,
                    marginRight:80,
                    borderRadius:10,
                    zIndex:1,
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
