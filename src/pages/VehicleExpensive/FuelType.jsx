


import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Fuelpump from '../../assets/Fuelpump.png';
import { Button } from "@mui/material";
import Electric from '../../assets/electric.png';
import { setfuel_type_id } from '../../features/karma.jsx';
import { useSelector, useDispatch } from "react-redux";

function FuelType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const vehicleData = [
    { id: 1, image: Fuelpump, text: "Petrol/Diesel", bgColor: "#e1eefa" },
    { id: 2, image: Electric, text: "Electric Vehicle", bgColor: "#fff4e5" },
  ];

  const handleForwardClick = () => {
    navigate('/kilometer');
  };

  const handleBackClick = () => {
    navigate('/no-of-vehicle');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="body1"
        sx={{
          marginTop:2,
          marginBottom: 2,
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          opacity: 1,
          color: "#030911",
        }}
      >
        What types of fuel do you use?
      </Typography>

      <Grid2 container spacing={3} justifyContent="center">
        {vehicleData.map((vehicle, index) => (
          <div key={vehicle.id} onClick={() => {
            dispatch(setfuel_type_id({ setfuel_type_id: vehicle.id }));
          }}>
            <Grid2
              item
              xs={12}
              sm={4}
              md={3}
              sx={{
                display: "flex",
                justifyContent:
                  index === vehicleData.length - 1 && vehicleData.length % 3 !== 0
                    ? "center"
                    : "flex-start",
              }}
            >
              <Card
                image={vehicle.image}
                text={vehicle.text}
                bgColor={vehicle.bgColor}
                backgroundSize="35%" // Reduce the image size specifically for this component
                customStyles={{
                  width: "120px",
                  height: "120px",
                  backgroundRepeat: "no-repeat",
                  border: "2px solid #ffd580",
                  mt: "20px",
                }}
              />
            </Grid2>
          </div>
        ))}
      </Grid2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 360,
          marginTop: 17,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "46%",
            height: "49px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#1f79ec",
            border: "none",
            backgroundColor: "#deeaf9",
            textTransform: "none",
            marginLeft: 0,
            padding: 3,
          }}
          onClick={handleBackClick}
        >
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            width: "46%",
            height: "49px",
            borderRadius: "10px",
            fontWeight: "light",
            fontSize: "15px",
            backgroundColor: "#0671c9",
            textTransform: "none",
            color: "white",
            padding: 3,
            marginRight: 2,
          }}
          onClick={handleForwardClick}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default FuelType;
