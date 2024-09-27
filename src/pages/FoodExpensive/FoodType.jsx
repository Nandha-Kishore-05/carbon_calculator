import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Button } from "@mui/material";
import Leaf from '../../assets/leaf.png'
import Oden from '../../assets/Oden.png'
import leg from '../../assets/leg.png'


function FoodType() {

  const FoodData = [
    { id: 1, image: Leaf, text: "Veg", bgColor: "#e1eefa" },
    { id: 2, image: Oden, text: "Both", bgColor: "#fff4e5" },
    { id: 3, image: leg, text: "Non veg", bgColor: "#f9f9f9" },
    
  ];

  // const [selectedFood, setSelectedFood] = useState(null);
  // const handleCardClick = (id) => {
  //     setSelectedFood(id);
  //   };


    const navigate = useNavigate();
    const handleForwardClick =() =>{
      navigate('/home-appliance');
     }
   
     const handleBackClick = () => {
       navigate('/kilometer')
     }
  
  return (
    <Box sx={{ padding: 1 }}>
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
     What you normally eat?
    </Typography>

    <Grid2 container spacing={1} justifyContent="center">
      {FoodData.map((food, index) => (
        <Grid2
          item
          xs={12}
          sm={4}
          md={3}
          key={food.id}
          sx={{
            display: "flex",
            justifyContent:
              index === FoodData.length - 1 && FoodData.length % 3 !== 0
                ? "center"
                : "flex-start",
          }}
        >
          <Card
            image={food.image}
            text={food.text}
            bgColor={food.bgColor}
            backgroundSize="50%"
            onClick={() => handleCardClick(food.id)} 
            customStyles={{
              width: "120px",
              height: "120px",
              backgroundRepeat: "no-repeat",
              border: "2px solid #ffd580", 
              // boxShadow: selectedFood === food.id ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none", 
              // transition: "border 0.2s ease, box-shadow 0.2s ease",
            }}
          />
        </Grid2>
      ))}
    </Grid2>
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 360,
          marginTop: 8,
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
            // border: "blue",
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
  )
}

export default FoodType
