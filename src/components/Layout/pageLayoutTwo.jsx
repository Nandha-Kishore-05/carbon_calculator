import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

function PageLayoutTwo({ children }) {
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          {/* Outer Grid Container */}
          <Grid2 container justifyContent="center">
            <Grid2 item>
              {/* First Paper Component */}
              <Paper
                sx={{
                  height: 730,
                  width: 400,
                  marginTop: 5,
                  marginLeft: 50,
                  padding: 2,
                }}
              >
                {/* Inner Grid Container */}
                <Grid2 container justifyContent="center">
                  <Grid2 item>
                    {/* Nested Paper Component */}
                    <Paper
                      sx={{
                        height: 500,
                        width: 400,
                        marginTop: 5,
                        marginLeft: 50,
                        padding: 2,
                      }}
                    >
                      {children} {/* Render content inside this */}
                    </Paper>
                  </Grid2>
                </Grid2>
              </Paper>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default PageLayoutTwo;
