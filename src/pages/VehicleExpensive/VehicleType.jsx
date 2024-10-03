import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { addindex, addval,setindex } from "../../features/header.jsx";
function VehicleType() {
  const dispatch = useDispatch();
  const [carb,setcarb]=useState(useSelector((state) => state.header.value.val)[0])
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const handleCardClick = (id) => {
    setSelectedVehicle(id);
  };
  const data = useSelector((state) => state.data.value.vehicle_types);
  
  const vehicle_id = useSelector((state) => state.karma.value.vehicle_type_id);
 
  console.log(data)
  const vehicleData = [
    {
      id: 1,
      image: Bicycle,
      text: "Bicycle/Walk",
      bgColor: "#EEF6FF",
      borderColor: "#FFF4F3",
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
  const color=["#EEF6FF","#FFF4E6","#FFF4F3"]
  const border = ["#4A9FE9","#FFBA63","#EB7E74"]
const image=[Bicycle,MotorScooter,Automobile]
  const percentage = 1;
  useEffect(()=>{
    dispatch(setindex({index:0}))

},[])
  return (
    <Typography variant="h5">
      <Box
        sx={{
          fontSize: "14px",
          color: "black",
          marginTop: "50px",
          marginBottom: "1px",
          textAlign: "center",
           fontfamily: "Nunito"
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
          {data.map((vehicle, index) => (
            <div
              key={vehicle.vehicle_type_id}
              onClick={() => {
                setcarb(vehicle.carbon_value)
                dispatch(setvehicle_type_id({ vehicle_type_id: vehicle.vehicle_type_id }));
               
                // handleCardClick(vehicle.id);
              }}
            >
              <Grid2
                item
                xs={12}
                sm={12}
                md={7}
                key={vehicle.vehicle_type_id}
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
                <div style={{ display: "flex", gap: "10px", fontfamily: "Nunito" }}>
                  <Card
                    image={image[vehicle.vehicle_type_id-1]}
                    text={vehicle.vehicle_type_name}
                    bgColor={color[vehicle.vehicle_type_id-1]}
                    backgroundSize="50%"
                    isSelected={vehicle.vehicle_type_id}
                    border={
                      vehicle.vehicle_type_id === vehicle_id
                        ? border[vehicle.vehicle_type_id-1] // Use the correct border color
                        : "transparent"
                    }
                    onClick={() => handleCardClick(vehicle.id)}
                    customStyles={{
                      width: "110px",
                      height: "110px",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                    }}
                    imageHeight={60}
                    imageWidth={80}
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
              bgcolor="#0e70eb"
              textcolor="white"
              route="/no-of-vehicle"
              sx={{ width: "370px" }}
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

export default VehicleType;
