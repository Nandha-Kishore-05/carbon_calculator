import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import CustomButton from "../../components/button/CustomButton.jsx";
import Bicycle from "../../assets/Bicycle.png";
import Card from "../../components/Card/Card";
import { useState } from "react";
import MotorScooter from "../../assets/MotorScooter.png";
import Automobile from "../../assets/Automobile.png";
import { useDispatch } from "react-redux";
import { setvehicle_type_id } from "../../features/karma.jsx";

function VehicleType() {
  const dispatch = useDispatch();
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (id) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((cardId) => cardId != id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const vehicleData = [
    {
      id: 1,
      image: Bicycle,
      text: "Bicycle/Walk",
      bgColor: "#EEF6FF",
      borderColor: "#3b85f5",
    },
    {
      id: 2,
      image: MotorScooter,
      text: "Two wheeler",
      bgColor: "#FFF4E6",
      borderColor: "#FFBA63",
    },
    {
      id: 3,
      image: Automobile,
      text: "Car",
      bgColor: "#FFF4F3",
      borderColor: "#EB7E74",
    },
  ];
  const percentage = 1;
  return (
    <Typography variant="h5">
      <Box
        sx={{
          fontSize: "16px",
          color: "black",
          marginTop: "50px",
          marginBottom: "1px",
          textAlign: "center",
        }}
      >
        <b> Choose the vehicles you use for commuting?</b>
      </Box>
      <Box sx={{ paddingY: 0, paddingX: 0 }}>
        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          {vehicleData.map((vehicle, index) => (
            <div
              key={vehicle.id}
              onClick={() => {
                dispatch(setvehicle_type_id({ vehicle_type_id: vehicle.id }));
                handleCardClick(vehicle.id);
              }}
            >
              <Grid2
                item
                xs={12}
                sm={12}
                md={7}
                key={vehicle.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    index === vehicleData.length - 1 &&
                    vehicleData.length % 3 !== 0
                      ? "center"
                      : "flex-start",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <Card
                    image={vehicle.image}
                    text={vehicle.text}
                    bgColor={vehicle.bgColor}
                    backgroundSize="50%"
                    isSelected={selectedCards.includes(vehicle.id)}
                    border={
                      selectedCards.includes(vehicle.id)
                        ? vehicle.borderColor
                        : "transparent"
                    }
                    onClick={() => handleCardClick(vehicle.id)}
                    customStyles={{
                      width: "110px",
                      height: "110px",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Grid2>
            </div>
          ))}
        </Grid2>

        <Box
          sx={{
            height: "55px",
            position: "absolute",
            bottom: "25px",
            left: "20px",
            right: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <CustomButton
              text="Next"
              variant="contained"
              bgcolor="#1d78ec"
              textcolor="white"
              route="/no-of-vehicle"
              sx={{ width: "370px" }}
            />
          </Box>
        </Box>
      </Box>
    </Typography>
  );
}

export default VehicleType;
