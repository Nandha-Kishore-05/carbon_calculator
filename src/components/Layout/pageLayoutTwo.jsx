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
              borderBottomLeftRadius: 10,  
              borderBottomRightRadius: 10, 
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
