


import Typography from '@mui/material/Typography';
import React,{useState} from 'react';
import  Divider  from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button/CustomButton';
import { useDispatch } from "react-redux";
import {useSelector } from "react-redux";
import {setnumber_of_vehicles} from '../../features/karma.jsx'
import { addindex, addval,subindex } from "../../features/header.jsx";

function NoOfVehicle() {
  const navigate = useNavigate();
  console.log("vehicle ",useSelector((state) => state.karma.value.number_of_vehicles))
  const [sliderValue, setSliderValue] = React.useState(useSelector((state) => state.karma.value.number_of_vehicles));
  const dispatch=useDispatch();
  const [carb,setcarb]=useState(0)
 
  const handleSliderChange = (event, newValue) => {
    dispatch(setnumber_of_vehicles({number_of_vehicles:newValue}))
    setSliderValue(newValue);
  };

  const marks = [
    { value: 2, label: <strong>2</strong> },
    { value: 4, label: <strong>4</strong> },
    { value: 6, label: <strong>6</strong> },
    { value: 8, label: <strong>8</strong> },
    { value: 10, label: <strong>10</strong> }
  ];

 
  return (

      <Typography variant="h5">
        <Box sx={{ fontSize: '16px', color: 'black', marginTop: '60px', marginBottom: '29px', textAlign: 'center' }}>
          <b>How many vehicles do you own?</b>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Box sx={{ width: '95%',mt:"30px" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
            <Divider orientation="vertical" sx={{ top: '466px',left: '20px',width: '4px',
        height: '20px',bgcolor: '#0E70EB',borderRadius:'4px',zIndex:'1' }} />    
      <Slider
      aria-label="NumberofVehicles"
      defaultValue={4}
      valueLabelDisplay="auto"
      step={2}
      min={2}
      max={10}
      marks={marks}
      value={sliderValue}       
      onChange={handleSliderChange}
      sx={{top: '500px',
        position:'absolute',
        left: '20px',
        width: '358px',
        height: '4px'}}
    />
      <Divider orientation="vertical" sx={{ top: '466px',
        left: '351px',
        width: '4px',
        height: '20px', bgcolor: '#0E70EB',borderRadius:'4px' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            textAlign="center"
            marginBottom="15px"
            color="#fea062"
            fontWeight="bold"
            padding="5px 10px"
            bgcolor="#fff4e4"
            sx={{ fontSize: '16px', width: '30%', borderRadius: '5px' }}
          >
            {sliderValue} vehicles
          </Typography>
        </Box>
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
          route="/vehicle-type"
          sx={{ width: '200px',
            backgroundColor:"#deeaf9"
           }}  
           funct={()=>{
            dispatch(subindex());
           }}
        />

        <CustomButton 
          text="Next" 
          variant="contained" 
          bgcolor="#1d78ec" 
          textcolor="white" 
          route="/fuel-type"
          sx={{ width: '200px' }}  
          funct={()=>{
            
            dispatch(addval({val:sliderValue}));
            dispatch(addindex());
           


          }}

        />
        </Box>
        </Box>
      </Typography>
  
  );
}

export default NoOfVehicle;