import Typography from '@mui/material/Typography';
import React from 'react';
import CustomButton from '../../components/button/CustomButton';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Slider, Divider, Button } from '@mui/material';

function KiloMeters() {
  const navigate = useNavigate();
  
  const [value, setValue] = React.useState(80); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleForwardClick = () => {
    navigate('/food-type');
  };

  const handleBackClick = () => {
    navigate('/fuel-type');
  };

  return (
    <>
      <Typography variant='h5'>
        <Box sx={{ fontSize:'16px', color:'black', marginTop:'40px', marginBottom:'40px', textAlign:'center' }}>
          <b>How many kilometers do you drive per week?</b>
        </Box>
      </Typography>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
        <Box sx={{ width: '90%' }}> 
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Divider orientation="vertical" sx={{ width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }} />
            <Slider
              aria-label="CustomSlider"
              value={value}
              min={10}
              max={250}
              step={1}
              valueLabelDisplay="auto"
              onChange={handleChange}
            />
            <Divider orientation="vertical" sx={{ width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2"><b>10</b></Typography>
            <Typography variant="body2"><b>250</b></Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography 
          variant="h6" 
          textAlign='center' 
          marginBottom='15px' 
          color='#fea062' 
          fontWeight='bold'
          padding='5px 5px' 
          bgcolor='#fff4e4' 
          sx={{ fontSize:'16px', width:'21%', borderRadius:'5px' }}
        >
          {value} km
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
          route="/fuel-type"
          sx={{ width: '200px',
            backgroundColor:"#deeaf9"
           }}  
        />

        <CustomButton 
          text="Next" 
          variant="contained" 
          bgcolor="#1d78ec" 
          textcolor="white" 
          route="/food-type"
          sx={{ width: '200px' }}  
        />
        </Box>
        </Box>
    </>
  );
}

export default KiloMeters;

