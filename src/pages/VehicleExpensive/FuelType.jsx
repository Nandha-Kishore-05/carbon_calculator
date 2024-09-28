import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Fuelpump from '../../assets/Fuelpump.png'
import { Button } from "@mui/material";
import Electric from '../../assets/electric.png'
import {setfuel_type_id} from '../../features/karma.jsx'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/button/CustomButton.jsx";

function FuelType() {
    const navigate = useNavigate();
const dispatch=useDispatch();
    const vehicleData = [
      { id: 1, image: Fuelpump, text: "Petrol/Diesel", bgColor: "#e1eefa" },
      { id: 2, image: Electric, text: "Electric Vehicle", bgColor: "#fff4e5" },
    ];

  const handleForwardClick =() =>{
   navigate('/kilometer');
  }

  const handleBackClick = () => {
    navigate('/no-of-vehicle')
  }
  return (
    <Box >
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
        What types of vehicle do you use?
      </Typography>

      <Grid2 container spacing={3} justifyContent="center">
        {vehicleData.map((vehicle, index) => (
          <div onClick={()=>{

           
            dispatch(setfuel_type_id({setfuel_type_id:vehicle.id}))
          }}>
          <Grid2
            item
            xs={12}
            sm={4}
            md={3}
            key={vehicle.id}
            sx={{
              display: "flex",
              justifyContent:
                index === vehicleData.length - 1 && vehicleData.length % 3 !== 0
                  ? "center"
                  : "flex-start",
            }}
          >
            <Card
              image={vehicle.image}
              text={vehicle.text}
              bgColor={vehicle.bgColor}
              backgroundSize="50%"
              onClick={() => handleCardClick(vehicle.id)} 
              customStyles={{
               
                width: "120px",
                height: "120px",
                backgroundRepeat: "no-repeat",
                border: "2px solid #ffd580", 
                mt:"20px"
                // boxShadow: selectedVehicle === vehicle.id ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none", 
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
          route="/no-of-vehicle"
          sx={{ width: '200px',
            backgroundColor:"#deeaf9"
           }}  
        />

        <CustomButton 
          text="Next" 
          variant="contained" 
          bgcolor="#1d78ec" 
          textcolor="white" 
          route="/kilometer"
          sx={{ width: '200px' }}  
        />
        </Box>
        </Box>
    </Box>
  )
}

export default FuelType
