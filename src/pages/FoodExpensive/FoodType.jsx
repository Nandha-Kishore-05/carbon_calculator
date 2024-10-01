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
import { useState } from "react";
import { useDispatch } from "react-redux";
import {setdiet_type_id} from '../../features/karma.jsx';
import CustomButton from "../../components/button/CustomButton.jsx";
function FoodType() {
  const dispatch=useDispatch();
  const FoodData = [
    { id: 1, image: Leaf, text: "Veg", bgColor: "#E4FFEE",borderColor: "#2bf074", imageWidth: "70px",
      imageHeight: "50px", },
    { id: 2, image: Oden, text: "Both", bgColor: "#FFF4E6",borderColor: "#e89833", imageWidth: "80px",
      imageHeight: "50px", },
    { id: 3, image: leg, text: "Non veg", bgColor: "#FFF4F3",borderColor: "#EB7E74", imageWidth: "70px",
      imageHeight: "50px", },
    
  ];
  const data = useSelector((state) => state.data.value.dietary_types);
  console.log(data)
  const color=["#E4FFEE","#FFF4E6","#FFF4F3"]
  const bordercolor=["#51F28D","#FAAD4B","#EB7E74"]
  const image=[Leaf,Oden,leg]
  const [selectedFood,setSelectedFood]=useState(-1)

  const [selectedFoods, setSelectedFoods] = useState([]);
    const handleFoodClick = (id) => {
      setSelectedFood(id)
      };
  
  return (
    
    <Typography variant="h5">
      <Box
        sx={{
          fontSize: "16px",
          color: "black",
          marginTop: "50px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        <b> What you normally eat? </b>
      </Box>
      <Box sx={{ paddingY: 0, paddingX: 0 }}>
    <Grid2  container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          padding={0}>

      {data.map((food, index) => (
        <div 
        key={food.Food_type_id} 
        onClick={()=>{
          dispatch(setdiet_type_id({diet_type_id:food.Food_type_id}))
          handleFoodClick(food.Food_type_id);
        }}>
        <Grid2
          item
          xs={12}
          sm={12}
          md={7}
          key={food.id}
          sx={{
            display: "flex",
            justifyContent:
              index === FoodData.length - 1 && FoodData.length % 3 !== 0
                ? "center"
                : "flex-start",
                marginTop:"1px",
          }}
        >
          <Card
           image={image[food.Food_type_id-1]}
           text={food.Food_type_name}
           bgColor={color[food.Food_type_id-1]}
            backgroundSize="50%"
            isSelected={food.Food_type_id==selectedFood}
           
            border={
              food.Food_type_id === selectedFood
                ? bordercolor[ food.Food_type_id-1] // Use the correct border color
                : "transparent"
            }
            onClick={() => handleFoodClick(food.Food_type_id)} 
            customStyles={{
              width: "125px",
                      height: "115px",
              backgroundRepeat: "no-repeat",
            }}
            imageWidth={food.imageWidth}
            imageHeight={food.imageHeight}
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
        </Typography>
  )
}

export default FoodType
