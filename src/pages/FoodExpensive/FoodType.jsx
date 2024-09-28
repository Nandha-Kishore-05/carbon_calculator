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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setdiet_type_id} from '../../features/karma.jsx';
import CustomButton from "../../components/button/CustomButton.jsx";
function FoodType() {
  const dispatch=useDispatch();
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
        <div onClick={()=>{
          dispatch(setdiet_type_id({diet_type_id:food.id}))

        }}>
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
        </div>
      ))}
    </Grid2>
    <Box  sx={{height:"55px", position: 'absolute',
          bottom: '25px',
          left: '20px',
          right: '20px',}}>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          gap: 2,                  
          alignItems: 'center',           
        }}
      >
        <CustomButton 
          text="Back" 
          variant="secondary"  
          textcolor="#1d78ec" 
          route="/kilometer"
          sx={{ width: '200px',
            backgroundColor:"#deeaf9"
           }}  
        />

        <CustomButton 
          text="Next" 
          variant="contained" 
          bgcolor="#1d78ec" 
          textcolor="white" 
          route="/home-appliance"
          sx={{ width: '200px' }}  
        />
        </Box>
        </Box>
  </Box>
  )
}

export default FoodType
