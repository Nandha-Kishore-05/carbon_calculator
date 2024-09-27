import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import CustomButton from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import Icon1 from "../../assets/icon1.png";
import Bicycle from "../../assets/Bicycle.png";
import Card from "../../components/Card/Card";
import { useState } from "react";
import MotorScooter from '../../assets/MotorScooter.jpg';
import Automobile from '../../assets/Automobile.jpg'

function VehicleType() {

    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const handleCardClick = (id) => {
        setSelectedVehicle(id);
      };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/no-of-vehicle");
  };

  // Array of card data
  const vehicleData = [
    { id: 1, image: Bicycle, text: "Bicycle/Walk", bgColor: "#e1eefa" },
    { id: 2, image: MotorScooter, text: "Two wheeler", bgColor: "#fff4e5" },
    { id: 3, image: Automobile, text: "Car", bgColor: "#f9f9f9" },
    // { id: 4, image: Icon1, text: "Bus", bgColor: "#e1eefa" },
    // { id: 5, image: Icon1, text: "Metro", bgColor: "#fff4e5" },
    // { id: 6, image: Icon1, text: "Auto", bgColor: "#f9f9f9" },
    // { id: 7, image: Icon1, text: "Other", bgColor: "#f9f9f9" },
  ];

  return (
    <Box >
      <Typography
        variant="body1"
        sx={{
          marginBottom: 3,
          textAlign: "center",
          fontSize: "15px",
          fontWeight:"bold",
          opacity: 1,
          color: "#030911",
        }}
      >
        Choose the vehicles you use for commuting?
      </Typography>

      <Grid2 container spacing={3} justifyContent="center">
        {vehicleData.map((vehicle, index) => (
          <Grid2
            item
            xs={12}
            sm={4}
            md={3}
            key={vehicle.id}
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
              backgroundSize="50%"
              onClick={() => handleCardClick(vehicle.id)} 
              customStyles={{
                // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                width: "120px",
                height: "120px",
                backgroundRepeat: "no-repeat",
                border: "2px solid #ffd580", 
                // border: selectedVehicle === vehicle.id ? "2px solid #ffd580" : "2px solid transparent",
                // boxShadow: selectedVehicle === vehicle.id ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none", 
                // transition: "border 0.2s ease, box-shadow 0.2s ease",
              }}
            />
          </Grid2>
        ))}
      </Grid2>

      <Box mt={4} display="flex" justifyContent="center" sx={{mt:"57px"}}>
        <CustomButton onClick={handleClick} width={350} label="Next" />
      </Box>
    </Box>
  );
}

export default VehicleType;
