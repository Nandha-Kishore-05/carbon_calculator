import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import { setappliance_id } from "../../features/karma.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import { useState } from "react";

function HomeAppliances() {
  const [selectedAppliance, setSelectedAppliance] = useState([]);

  const handleApplianceClick = (id) => {
    setSelectedAppliance((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((Id) => applianceId != id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

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
          {HomeAppliancesData.map((appliance, index) => (
            <div
              key={appliance.id}
              onClick={() => {
                // dispatch(setsetappliance_id({ setappliance_id: appliance.id }));
                handleApplianceClick(appliance.id);
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
                  text={appliance.text}
                  bgColor={appliance.bgColor}
                  backgroundSize="50%"
                  isSelected={selectedAppliance.includes(appliance.id)}
                  border={
                    selectedAppliance.includes(appliance.id)
                      ? appliance.borderColor
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
            />

            <CustomButton
              text="Next"
              variant="contained"
              bgcolor="#1d78ec"
              textcolor="white"
              route="/current-unit"
              sx={{ width: "200px" }}
            />
          </Box>
        </Box>
      </Box>
    </Typography>
  );
}

export default HomeAppliances;
