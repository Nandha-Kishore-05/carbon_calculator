import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setappliance_id } from "../../features/karma.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { addindex, addval,subindex,setindex } from "../../features/header.jsx";

import { setdata } from "../../features/data.jsx";
function HomeAppliances() {
  const [selectedAppliance, setSelectedAppliance] =   React.useState(useSelector((state) => state.karma.value.appliance_id));
  const [carb,setcarb]=useState(useSelector((state) => state.header.value.val)[4])

  const user = useSelector((state) => state.karma.value.appliance_id);

  const data = useSelector((state) => state.data.value.appliances);
console.log(data)
  const navigate = useNavigate();
  const handleApplianceClick = (id) => {
    setSelectedAppliance((prevSelected) => {
      if (prevSelected.includes(id.toString())) {
        
        setcarb(carb-data.filter((Id) => Id.appliance_id== id.toString())[0].carbon_value)
        console.log(carb)
        return prevSelected.filter((Id) => Id != id.toString());
      } else {
        console.log(carb)
        setcarb(carb+data.filter((Id) => Id.appliance_id== id.toString())[0].carbon_value)
        return [...prevSelected, id.toString()];
      }
    });
  };
  const [selectarray, setselectedarray] = useState([]);
  const color = [
    "#E4FFEE",
    "#FFF4E6",
    "#FFF4F3",
    "#F9F5F7",
    "#FCF5FF",
    "#E4FBFF",
    "#FFF4F3",
  ];
  const borderColor = [
    "#51F28D",
    "#FFBA63",
    "#FB8276",
    "#EF9BC5",
    "#D793F4",
    "#8AE6F7",
    "#EB7E74",
  ];

  const dispatch = useDispatch();
  const HomeAppliancesData = [
    { id: 1, text: "Fridge", bgColor: "#E4FFEE", borderColor: "#EB7E74" },
    { id: 2, text: "AC", bgColor: "#FFF4F3", borderColor: "#FFBA63" },
    { id: 3, text: "Chimney", bgColor: "#F9F5F7", borderColor: "#EF9BC5" },
    {
      id: 4,
      text: "Washing Machine",
      bgColor: "#FCF5FF",
      borderColor: "#EB7E74",
    },
    {
      id: 5,
      text: "Electric  vehicles",
      bgColor: "#E4FBFF",
      borderColor: "#EB7E74",
    },
    { id: 6, text: "Air cooler", bgColor: "#FFF4F3", borderColor: "#EB7E74" },
    {
      id: 7,
      text: "Mixer / Grinders",
      bgColor: "#FFF4F3",
      borderColor: "#EB7E74",
    },
  ];
  
  useEffect(()=>{
    dispatch(setindex({index:5}))

},[])

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
        <b> Select the appliances your use at home </b>
      </Box>

      <Box sx={{ paddingY: 0, paddingX: 0 }}>
        <Grid2
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          {data.map((appliance, index) => (
            <div
              key={appliance.appliance_id}
              onClick={() => {
                // dispatch(setsetappliance_id({ setappliance_id: appliance.id }));
                handleApplianceClick(appliance.appliance_id);
              }}
            >
              <Grid2
                item
                xs={12}
                sm={4}
                md={3}
                key={appliance.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    index === HomeAppliancesData.length - 1 &&
                    HomeAppliancesData.length % 3 !== 0
                      ? "center"
                      : "flex-start",
                  ml: "10px",
                }}
              >
                <Card
                  text={appliance.appliance_name}
                  bgColor={color[index]}
                  backgroundSize="50%"
                  isSelected={selectedAppliance.includes(
                    appliance.appliance_id.toString()
                  )}
                  border={
                    selectedAppliance.includes(
                      appliance.appliance_id.toString()
                    )
                      ? borderColor[appliance.appliance_id.toString() - 1]
                      : "transparent"
                  }
                  onClick={() => handleApplianceClick(appliance.id)}
                  customStyles={{
                    width: "90px",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: "10px",
                    // overflow: "hidden",
                    whiteSpace: "wrap",
                  }}
                ></Card>
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
              route="/food-type"
              sx={{ width: "200px", backgroundColor: "#deeaf9" }}
              funct={()=>{
                // dispatch(subindex());
              
              }}
            />
            <div
              onClick={() => {
                dispatch(setappliance_id({ appliance_id: selectedAppliance }));
              }}
            >
              <CustomButton
                text="Next"
                variant="contained"
                bgcolor="#1d78ec"
                textcolor="white"
                route="/current-unit"
                sx={{ width: "200px" }}
                funct={() => {
                  dispatch(setappliance_id({ appliance_id: selectarray }));
                  dispatch(addval({val:carb}));

                  // dispatch(addindex());

                }}
              />
            </div>
          </Box>
        </Box>
      </Box>
    </Typography>
  );
}

export default HomeAppliances;
