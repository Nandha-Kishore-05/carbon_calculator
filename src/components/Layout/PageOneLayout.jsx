import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

function PageOneLayout({ children }) {
  return (
    
    <Container>
      <div style={{overflow:'hidden'}}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <Grid2 container justifyContent="center">
            <Grid2 item>
              <Paper
                sx={{
                  height: 787,
                  width: 400,
                  marginTop: 5,
                  marginLeft: 50,
                  // alignItems:"center",
                  // justifyContent:"center",
                  display:"flex",
                  // padding: 2,
                  backgroundColor:"#edf2fa",
                  position:"absolute",
                   border:"1px solid  #F0F4FA",
                }}
              >
                {children}
              </Paper>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      </div>
     
    </Container>
    
  );
}

export default PageOneLayout;
