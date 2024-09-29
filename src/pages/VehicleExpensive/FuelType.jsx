import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Fuelpump from "../../assets/Fuelpump.png";
import { Button } from "@mui/material";
import Electric from "../../assets/electric.png";
import { setfuel_type_id } from "../../features/karma.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/button/CustomButton.jsx";

function FuelType() {
  const [selectedFuel, setSelectedFuel] = useState([]);

  const handleFuelClick = (id) => {
    setSelectedFuel((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((fuelId) => fuelId != id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const dispatch = useDispatch();
  const fuelData = [
    {
      id: 1,
      image: Fuelpump,
      text: "Petrol/ Diesel",
      bgColor: "#FFF4F3",
      borderColor: "#EB7E74",
      imageWidth: "100px",
      imageHeight: "60px",
    },
    {
      id: 2,
      image: Electric,
      text: "Electric Vehicle",
      bgColor: "#FFF4E6",
      borderColor: "#FFBA63",
      imageWidth: "73px",
      imageHeight: "70px",
    },
  ];

  return (
    <Typography variant="h5">
      <Box
        sx={{
          fontSize: "16px",
          color: "black",
          marginTop: "58px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <b> What types of vehicle do you use?</b>
      </Box>
      <Box>
        <Grid2 container spacing={4} justifyContent="center">
          {fuelData.map((fuel, index) => (
            <div
              onClick={() => {
                dispatch(setfuel_type_id({ setfuel_type_id: fuel.id }));
                handleFuelClick(fuel.id);
              }}
            >
              <Grid2
                item
                xs={12}
                sm={4}
                md={3}
                key={fuel.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    index === fuelData.length - 1 && fuelData.length % 3 !== 0
                      ? "center"
                      : "flex-start",
                }}
              >
                <Card
                  image={fuel.image}
                  text={fuel.text}
                  bgColor={fuel.bgColor}
                  backgroundSize="50%"
                  isSelected={selectedFuel.includes(fuel.id)}
                  border={
                    selectedFuel.includes(fuel.id)
                      ? fuel.borderColor
                      : "transparent"
                  }
                  onClick={() => handleFuelClick(fuel.id)}
                  customStyles={{
                    width: "130px",
                    height: "130px",
                    backgroundRepeat: "no-repeat",
                    mt: "20px",
                  }}
                  imageWidth={fuel.imageWidth}
                  imageHeight={fuel.imageHeight}
                />
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
              text="Back"
              variant="secondary"
              textcolor="#1d78ec"
              route="/no-of-vehicle"
              sx={{ width: "200px", backgroundColor: "#deeaf9" }}
            />

            <CustomButton
              text="Next"
              variant="contained"
              bgcolor="#1d78ec"
              textcolor="white"
              route="/kilometer"
              sx={{ width: "200px" }}
            />
          </Box>
        </Box>
      </Box>
    </Typography>
  );
}

export default FuelType;
