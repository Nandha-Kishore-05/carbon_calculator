import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setappliance_id } from "../../features/karma.jsx";
function HomeAppliances() {
  const dispatch = useDispatch();
  const HomeAppliancesData = [
    { id: 1, text: "Fridge", bgColor: "#E4FFEE" },
    { id: 2, text: "AC", bgColor: "#FFF4E6" },
    { id: 3, text: "Chimney", bgColor: "#FFF4F3" },
    { id: 4, text: "Washing Machine", bgColor: "#F9F5F7" },
    { id: 5, text: "Electric vehicle", bgColor: "#FCF5FF" },
    { id: 6, text: "Air cooler", bgColor: "#E4FBFF" },
    { id: 7, text: "Mixer/ Grinder", bgColor: "#FFF4F3" },
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
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 2,
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          opacity: 1,
          color: "#030911",
          marginTop:2.5,
        }}
      >
        Select the appliances your use at your home{" "}
      </Typography>

      <Grid2 container spacing={1.5} justifyContent="center">
        {HomeAppliancesData.map((appliance, index) => (
          <div
            onClick={() => {
              dispatch(setsetappliance_id({ setappliance_id: appliance.id }));
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "10px",
                  // boxShadow: selectedappliance === appliance.id ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none",
                  // transition: "border 0.2s ease, box-shadow 0.2s ease",
                }}
              ></Card>
            </Grid2>
          </div>
        ))}
      </Grid2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 360,
          marginTop: 1.2,
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
            border: "none",
            backgroundColor: "#c9e1f5",
            textTransform: "none",
            mr: "10px",
            paddingLeft: 2,
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
            mr: "2px",
            paddingRight: 2,
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
