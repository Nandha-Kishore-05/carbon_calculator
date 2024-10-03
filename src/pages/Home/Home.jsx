import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2"; // Note: Check if you're using @mui/material/Grid instead
import Paper from "@mui/material/Paper";
import HomeImg from "../../assets/homeimg1.png";
import { useNavigate } from "react-router-dom";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import ImgWrapper from "../../components/ImgWrapper/ImgWrapper";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setdata } from "../../features/data.jsx";
import { useSelector } from "react-redux";
import { initial } from "../../features/header.jsx";
function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(initial());

  },[])
  useEffect(() => {
    axios
      .get("http://localhost:8080/crayon/all-data")
      .then((response) => {
       console.log(response.data)
       dispatch(setdata({ data: response.data}));

        
       
      });
  }, []);
  const navigate = useNavigate();

  const handleLaterClick = () => {
    navigate("/vehicle-type");
  };

  const InfoSection = ({ icon, title, description, overlayColor }) => (
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
          src={icon}
          alt={title}
          overlayColor={overlayColor}
          sx={{ width: { xs: "80px", md: "100px" }, height: "auto" }}
        />
        <Box>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "14px", md: "13.1px" },
              width: "239px",
              height: "25px",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              color: "#60666F",
              width: "230px",
              height: "37px",
              textAlign: "left",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Paper>
    </Grid2>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", // Ensure full-screen height
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%", // Set to 100% to avoid shifts
          backgroundColor: "#d2e2fa",
          backgroundImage: `url(${HomeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          opacity: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "40vh", // Set height relative to the viewport
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(227, 236, 250, 0.4)",
            zIndex: 0,
          },
        }}
      >
     <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#0E70EB",
            fontWeight: 800,
            textAlign: "center",
            zIndex: 1,
            marginTop: { xs: "15vh", md: "20vh" },
            fontSize: { xs: "16px", md: "20px" },
            letterSpacing: "0.5px",
            maxWidth: "80vw",
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
          padding: { xs: 1, md: 2 },
          marginTop: { xs: "-5vh", md: "-10vh" },
          zIndex: 1,
        }}
      >
        <Grid2 container >
        <InfoSection
  icon={Icon1}
  title={
    <Typography
      sx={{
        fontFamily: "Sarabun, sans-serif",
        fontWeight: "bolder",
        fontSize: "14px",
   
        letterSpacing: "0px",
        color: "#030911",
      }}
    >
      Answer our questions
    </Typography>
  }
  description={
    <Typography
      sx={{
        fontFamily: "Sarabun, sans-serif",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: "0px",
        color: "#60666F",
      }}
    >
      Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc.
    </Typography>
  }
  overlayColor="rgba(247, 188, 232, 0.4)"
/>

 

<InfoSection
  icon={Icon2}
  title={
    <Typography
      sx={{
        fontFamily: "Sarabun, sans-serif",
        fontWeight: "bolder",
        fontSize: "14px",
        letterSpacing: "0px",
        color: "#030911",
      }}
    >
      Know your carbon footprint
    </Typography>
  }
  description={
    <Typography
      sx={{
        fontFamily: "Sarabun, sans-serif",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: "0px",
        color: "#60666F",
      }}
    >
      Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc.
    </Typography>
  }
  overlayColor="rgba(250, 202, 211, 0.4)"
/>

<InfoSection
  icon={Icon3}
  title={
    <Typography
      sx={{
        fontFamily: "Sarabun, sans-serif",
        fontWeight: "bolder",
        fontSize: "14px",
        letterSpacing: "0px",
        color: "#030911",
      }}
    >
      Offset it by following the instructions
    </Typography>
  }
  description={
    <Typography
      sx={{
        fontFamily: "Sarabun, sans-serif",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: "0px",
        color: "#60666F",
      }}
    >
     estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc 
    </Typography>
  }
  overlayColor="rgba(226, 241, 230, 0.4)"
/>

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
    width: "48%",
    height: "45px",
    borderRadius: "8px",
    fontWeight: "bold",
     fontWeight: "600",
    fontSize: "14px",
    fontFamily: "Sarabun", 
    color: "#52a4ff",
    border: "none",
    backgroundColor: "#e6eefa",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#e6eefa",
    },
  }}
>
  Later
</Button>

<Button
  variant="contained"
  sx={{
    width: "48%",
    height: "45px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    fontFamily: "Sarabun", // Adding the font family
    backgroundColor: "#0e70eb",
    textTransform: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "#0e70eb",
    },
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
