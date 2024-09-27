import React from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import "./Layoutpagethree.css"
function PageLayoutThree({ children }) {
  return (
    <Container>

      <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
      
        <Grid2 item>
        <div className="layoutpagethree">
          <Paper
            sx={{
            backgroundColor:"transparent",
              height: 787,
              width: 400,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              position: "relative",
            }}
          
          >
            
           
            <Grid2
              container
              justifyContent="center"
              sx={{ position: "relative", zIndex: 1 }}
            >
              
              <Grid2 item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                

                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "40px",
                      left: "110px",
                      letterSpacing: "-0.08px",
                      color: "#030911",
                      fontSize: "20px",
                      font: "normal normal bold 16px/24px Excon",
                      fontFamily:"sans-serif"
                    }}
                    
                  >
                    Summary
                  </div>
                  <Paper
                    sx={{
                    
                      height: 590,
                      width: 340,
                      padding: 2,
                      borderRadius: 3,
                      marginTop: 12,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {children}
                  </Paper>
                </div>
              </Grid2>
             
            </Grid2>
        
          </Paper>
          </div>
        </Grid2>
        
      </Grid2>
    </Container>
  );
}

export default PageLayoutThree;
