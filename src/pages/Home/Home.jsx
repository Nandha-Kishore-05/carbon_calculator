import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import HomeImg from "../../assets/homeimg1.png";
import { useNavigate } from "react-router-dom";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import ImgWrapper from "../../components/ImgWrapper/ImgWrapper";

function Home() {
  const navigate = useNavigate();

  const handleLaterClick = () => {
    navigate("/vehicle-type");
  };

  return (
    <Box
      sx={{
        // backgroundColor: "#e6eefa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "99%",
          mr: "8px",
          mt: "0.6px",
          backgroundColor: "#d2e2fa",
          backgroundImage: `url(${HomeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          opacity: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "40vh",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(227, 236, 250, 0.6)",
            zIndex: 0,
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#0E70EB",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 1,
            //  padding: "10px",
            mt: "170px",
            ml: "50px",
            width: "320px",
            letterSpacing: "0.5px",
            position: "static",
          }}
        >
          Know & offset your carbon footprints!
        </Typography>
      </Box>

      <Box
        sx={{
          width: "90%",
          maxWidth: "490px",
          bgcolor: "white",
          borderRadius: "20px",
          padding: 2,
          marginTop: "-10vh",
          zIndex: 1,
        }}
      >
        <Grid2 container spacing={0}>
          <Grid2 item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: 1,
                display: "flex",
                boxShadow: "none",
                alignItems: "center",
              }}
            >
              <ImgWrapper
                src={Icon1}
                alt="Icon 1"
                overlayColor="rgba(247, 188, 232, 0.4) "
              />
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "15px",
                    left: "109px",
                    width: "239px",
                    height: "25px",
                  }}
                >
                  Answer our questions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#60666F",
                    top: "486px",
                    left: "109px",
                    width: "230px",
                    height: "37px",
                  }}
                >
                  Vestibulum venenatis fringilla lorem eu finibus. Donec ac
                  nulla nec nunc.
                </Typography>
              </Box>
            </Paper>
          </Grid2>

          <Grid2 item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: 1,
                display: "flex",
                boxShadow: "none",
                alignItems: "center",
              }}
            >
              <ImgWrapper
                src={Icon2}
                alt="Icon 1"
                overlayColor="rgba(250, 202, 211, 0.4) "
                width="100px"
              />

              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "14px",
                    left: "109px",
                    width: "239px",
                    height: "25px",
                  }}
                >
                  Know your carbon footprint
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#60666F",
                    top: "486px",
                    left: "109px",
                    width: "230px",
                    height: "37px",
                  }}
                >
                  estibulum venenatis fringilla lorem eu finibus. Donec ac nulla
                  nec nunc
                </Typography>
              </Box>
            </Paper>
          </Grid2>

          <Grid2 item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: 1,
                display: "flex",
                boxShadow: "none",
                alignItems: "center",
              }}
            >
              <ImgWrapper
                src={Icon3}
                alt="Icon 1"
                overlayColor="rgba(226, 241, 230, 0.4) "
                width="100px"
              />

              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    fontSize: "14px",

                    left: "109px",
                    width: "239px",
                    height: "40px",
                    textAlign: "left",
                  }}
                >
                  Offset it by following the instructions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#60666F",
                    textAlign: "left",
                    top: "486px",
                    left: "109px",
                    width: "230px",
                    height: "37px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "45%",
              height: "45px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "13px",
              color: "#52a4ff",
              border: "none",
              backgroundColor: "#c9e1f5",
              textTransform: "none",
            }}
          >
            Later
          </Button>

          <Button
            variant="contained"
            sx={{
              width: "48%",
              height: "45px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "13px",
              backgroundColor: "#0671c9",
              textTransform: "none",
              color: "white",
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
