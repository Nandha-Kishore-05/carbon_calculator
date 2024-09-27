import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom";
import { Box, CircularProgress } from '@mui/material';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import CircularWithValueLabel from '../../feedback/CircularBar';

function KiloMeters() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/food-type');
  }

  const [value, setValue] = React.useState(80); 

  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };


  return (
    <Typography variant='h5'>
     <Box sx={{ fontSize:'16px',color:'black',marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
      <b>How many kilometres you drive per week?</b>
    </Box>

    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',marginBottom:'15px' }}>
  <Box sx={{ width: '90%'}}> 
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Divider orientation="vertical" sx={{ top: '448px',left: '20px',width: '4px',
        height: '20px',bgcolor: '#0E70EB',borderRadius:'4px' }} />
  <Slider
        aria-label="CustomSlider"
        value={value}                
        min={10}                      
        max={250}                     
        step={1}                      
        valueLabelDisplay="auto"      
        onChange={handleChange}        
      />
  <Divider orientation="vertical" sx={{ top: '448px',
left: '351px',
width: '4px',
height: '20px', bgcolor: '#0E70EB',borderRadius:'4px' }} />
    </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          // onClick={() => setVal(MIN)}
          // sx={{ cursor: 'pointer' }}
        >
          <b>10</b> 
        </Typography>
        <Typography
          variant="body2"
          // onClick={() => setVal(MAX)}
          // sx={{ cursor: 'pointer' }}
        >
          <b>250</b> 
        </Typography>
      </Box>
    </Box>
    </Box>

    <Box sx={{display:'flex',justifyContent:'center'}}>
    <Typography variant="h6" textAlign='center' marginBottom='15px' color='#fea062' fontWeight='bold'
      padding='5px 5px' bgcolor='#fff4e4' sx={{fontSize:'16px',width:'21%',borderRadius:'5px'}}>
        {value} km
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

export default KiloMeters
