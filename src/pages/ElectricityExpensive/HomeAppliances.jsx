import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Button } from "@mui/material";

function HomeAppliances() {
  const HomeAppliancesData = [
    { id: 1, text: "Fridge", bgColor: "#e1eefa" },
    { id: 2, text: "AC", bgColor: "#fff4e5" },
    { id: 3, text: "Chimney", bgColor: "#f9f9f9" },
    { id: 4, text: "Washing Machine", bgColor: "#e1eefa" },
    { id: 5, text: "Electric vehicle", bgColor: "#fff4e5" },
    { id: 6, text: "Air cooler", bgColor: "#f9f9f9" },
    { id: 7, text: "Mixer/ Grinder", bgColor: "#f9f9f9" },
  ];

  // const [selectedappliance, setSelectedappliance] = useState(null);
  // const handleCardClick = (id) => {
  //     setSelectedappliance(id);
  //   };

  const navigate = useNavigate();
  const handleForwardClick = () => {
    navigate("/current-unit");
  };

  const handleBackClick = () => {
    navigate("/food-type");
  };
  return (
    <Box sx={{ padding: 1 }}>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 3,
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          opacity: 1,
          color: "#030911",
        }}
      >
        Choose the vehicles you use for commuting?
      </Typography>

      <Grid2 container spacing={1} justifyContent="center">
        {HomeAppliancesData.map((appliance, index) => (
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
            }}
          >
            <Card
              // image={appliance.image}
              text={appliance.text}
              bgColor={appliance.bgColor}
              // backgroundSize="50%"
              onClick={() => handleCardClick(appliance.id)}
              customStyles={{
                width: "90px",
                height: "90px",
                backgroundRepeat: "no-repeat",
                border: "2px solid #ffd580",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "10px",
                // boxShadow: selectedappliance === appliance.id ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none",
                // transition: "border 0.2s ease, box-shadow 0.2s ease",
              }}
            >


            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 360,
          marginTop: 3,
        }}
      >
        <Button
          variant="outlined"
          label="Later"
          sx={{
            width: "45%",
            height: "45px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#438cfa",
            // borderColor: '#676767',
            border: "none",
            backgroundColor: "#c9e1f5",
            textTransform: "none",
            mr: "10px",
            padding: 2,
          }}
          onClick={handleBackClick}
        >
          Back
        </Button>

        <Button
          variant="contained"
          label="Calculate & offset"
          sx={{
            width: "48%",
            height: "45px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "15px",
            backgroundColor: "#0671c9",
            textTransform: "none",
            color: "white",
            mr: "19px",
            padding: 2,
          }}
          onClick={handleForwardClick}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default HomeAppliances;
