import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom";
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import CircularWithValueLabel from '../../feedback/CircularBar';

function NoOfVehicle() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/fuel-type');
  }
  const [sliderValue, setSliderValue] = React.useState(4);
  const handleSliderChange = (event, newValue) => {
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
    <Typography variant='h5'>
    <Box sx={{ fontSize:'16px',color:'black',marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
      <b>How many vehicles do you own?</b>
    </Box>

    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',marginBottom:'15px' }}>
      <Box sx={{ width: '85%' }}> 
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom:'30px'}}>
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
      sx={{top: '446px',
        position:'absolute',
        left: '47px',
        width: '308px',
        height: '4px'}}
    />
      <Divider orientation="vertical" sx={{ top: '466px',
        left: '351px',
        width: '4px',
        height: '20px', bgcolor: '#0E70EB',borderRadius:'4px' }} />
    </Box>

        </Box>
      </Box>

<Box sx={{display:'flex',justifyContent:'center'}}>
    <Typography variant="h6" textAlign='center' marginBottom='15px' color='#fea062' fontWeight='bold'
      padding='5px 10px' bgcolor='#fff4e4' sx={{fontSize:'16px',width:'30%',borderRadius:'5px'}}>
        {sliderValue} vehicles
    </Typography>
</Box>



      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
              />
    </Typography>
  )
}

export default NoOfVehicle
