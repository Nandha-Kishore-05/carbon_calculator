import Typography from '@mui/material/Typography';
import React from 'react';
import { Button, Box, Slider, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button/CustomButton';

function NoOfVehicle() {
  const navigate = useNavigate();

  const handleForwardClick = () => {
    navigate('/fuel-type');
  };

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

  const handleBackClick = () => {
    navigate('/vehicle-type');
  };

  return (

      <Typography variant="h5">
        <Box sx={{ fontSize: '16px', color: 'black', marginTop: '40px', marginBottom: '40px', textAlign: 'center' }}>
          <b>How many vehicles do you own?</b>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <Box sx={{ width: '85%' }}>
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
        />

        <CustomButton 
          text="Next" 
          variant="contained" 
          bgcolor="#1d78ec" 
          textcolor="white" 
          route="/fuel-type"
          sx={{ width: '200px' }}  
        />
        </Box>
        </Box>
      </Typography>
  
  );
}

export default NoOfVehicle;