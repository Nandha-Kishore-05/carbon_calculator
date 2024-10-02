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
import { addindex, addval,subindex } from "../../features/header.jsx";

function FuelType() {
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedVehicle,setSelectedVehicle]=useState(-1)
  const [carb,setcarb]=useState(0)



  const data = useSelector((state) => state.data.value.fuel_types);

  const color=["#FFF4F3","#FFF4E6"]
  const bordercolor=["#EB7E74","#FFBA63"]
    const image=[ Fuelpump,Electric]
  const handleFuelClick = (id) => {
   setSelectedVehicle(id)
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
          {data.map((fuel, index) => (
            <div
              onClick={() => {
                dispatch(setfuel_type_id({ setfuel_type_id: fuel.fuel_type_id }));
                setcarb(fuel.carbon_value)
                handleFuelClick(fuel.fuel_type_id);
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
                  image={image[fuel.fuel_type_id-1]}
                  text={fuel.fuel_type_name}
                  bgColor={color[fuel.fuel_type_id-1]}
                  backgroundSize="50%"
                  isSelected={selectedVehicle==fuel.fuel_type_id}
                  border={
                    fuel.fuel_type_id === selectedVehicle
                      ? bordercolor[fuel.fuel_type_id-1] // Use the correct border color
                      : "transparent"
                  }
                  onClick={() => handleFuelClick(fuel.fuel_type_id)}
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
              funct={()=>{
                dispatch(subindex());
              }}
            />

            <CustomButton
              text="Next"
              variant="contained"
              bgcolor="#1d78ec"
              textcolor="white"
              route="/kilometer"
              sx={{ width: "200px" }}
              funct={()=>{
                dispatch(addval({val:carb}));
                dispatch(addindex());

              }}
            />
          </Box>
        </Box>
      </Box>
    </Typography>
  );
}

export default FuelType;
