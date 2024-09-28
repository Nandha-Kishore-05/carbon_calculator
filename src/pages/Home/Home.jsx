import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomButton from "../../components/button/button";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import HomeImg from "../../assets/homelogo.png";
import { useNavigate } from "react-router-dom";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";

function Home() {
  const navigate = useNavigate();

  const handleLaterClick = () => {
    navigate("/vehicle-type");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F0F4FA",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundImage: `url(${HomeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#0E70EB",
            fontSize: "normal normal bold 20px/28px Excon;",
            fontWeight: "800",
            textAlign: "center",
            letterSpacing: 0.9,
            marginTop: "50px",
            padding: 5,
          }}
        >
          Know & offset your carbon footprints
        </Typography>
      </Box>
      <Box
        sx={{
          width: 360,
          padding: 2,
          borderRadius: "20px",
          bgcolor: "white",
          boxShadow: "5 white",
          marginTop: "-140px",
          mb: "220px",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <Paper
              elevation={1}
              sx={{ padding: 1, display: "flex", boxShadow: "none" }}
            >
              <img
                src={Icon1}
                alt="Icon 1"
                style={{
                  marginRight: "16px",
                  borderRadius: "8px",
                  height: "60px",
                  width: "50px",
                }}
              />
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "normal normal 600 14px/28px Sarabun;x",
                    opacity: 1,
                  }}
                >
                  Answer our questions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    fontSize: "normal normal normal 12px/20px Sarabun",
                    color: "#60666F",
                    opacity: 1,
                    textAlign: "left",
                  }}
                >
                  estibulum venenatis fringilla lorem eu finibus. Donec ac nulla
                  nec nunc.
                </Typography>
              </Box>
            </Paper>
          </Grid2>

          <Grid2 item xs={12}>
            <Paper
              elevation={1}
              sx={{ padding: 1, display: "flex", boxShadow: "none" }}
            >
              <img
                src={Icon2}
                alt="Icon 2"
                style={{
                  marginRight: "16px",
                  borderRadius: "8px",
                  height: "60px",
                  width: "50px",
                }}
              />
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "normal normal 600 14px/28px Sarabun",
                    opacity: 1,
                  }}
                >
                  Know your carbon footprint
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    fontSize: "normal normal normal 12px/20px Sarabun",
                    color: "#60666F",
                    textAlign: "left",
                  }}
                >
                  Donec ac nulla nec nunc malesuada.
                </Typography>
              </Box>
            </Paper>
          </Grid2>

          <Grid2 item xs={12}>
            <Paper
              elevation={1}
              sx={{ padding: 1, display: "flex", boxShadow: "none" }}
            >
              <img
                src={Icon3}
                alt="Icon 3"
                style={{
                  marginRight: "16px",
                  borderRadius: "8px",
                  height: "60px",
                  width: "50px",
                }}
              />
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "normal normal 600 10px/20px Sarabun",
                    opacity: 1,
                  }}
                >
                  Offset it by following instructions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    fontSize: "normal normal normal 12px/20px Sarabun",
                    color: "#60666F",
                    textAlign: "left",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 360,
            marginTop: 2,
          }}
        >
          <Button
            variant="outlined"
            label="Later"
            sx={{
              width: "46%",
              height: "45px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "14px",
              color: "#1d78ec",
              // borderColor: '#676767',
              border: "none",
              backgroundColor: "#e6eefa",
              textTransform: "none",
              mr: "18px",
              padding: 2,
            }}
            // onClick={handleLaterClick}
          >
            Later
          </Button>

          <Button
            variant="contained"
            label="Calculate & offset"
            sx={{
              width: "46%",
              height: "45px",
              borderRadius: "8px",
              fontWeight: "normal",
              fontSize: "14px",
              fontFamily:"Sarabun",
              backgroundColor: "#1d78ec",
              textTransform: "none",
              color: "white",
              mr: "30px",
              padding: 2,
            }}
            onClick={handleLaterClick}
          >
            Calculate & Offset
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
