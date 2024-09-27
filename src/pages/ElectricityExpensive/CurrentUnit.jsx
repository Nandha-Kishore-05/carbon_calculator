import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom";
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';



function CurrentUnit() {
    
    const navigate = useNavigate();

  const handleClick =() =>{
   navigate('/carbon-footprint');
  }

  const [units, setUnits] = React.useState(200); 

  const handleUnitsChange = (event, newValue) => {
    setUnits(newValue); 
  };

  return (
    <Typography variant='h5'>
    <Box sx={{ fontSize:'16px',color:'black',marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
      <b>How much electricity do you consume for a month?</b>
    </Box>

    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',marginBottom:'15px' }}>
      <Box sx={{ width: '90%' }}> 
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Divider orientation="vertical" sx={{ top: '448px',left: '20px',width: '4px',
        height: '20px',bgcolor: '#0E70EB',borderRadius:'4px' }} />
    <Slider
      aria-label="ElectricityUnitsConsumed"
      defaultValue={4}
      valueLabelDisplay="auto"
      step={1}
      min={100}
      max={1000}
      units={units}
      value={units}       
      onChange={handleUnitsChange}
    />
    <Divider orientation="vertical" sx={{ top: '448px',
  left: '351px',
  width: '4px',
  height: '20px', bgcolor: '#0E70EB',borderRadius:'4px' }} />
      </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: 'pointer' }}
          >
            <b>100 units </b> 
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: 'pointer' }}
          >
            <b>1000 units</b> 
          </Typography>
        </Box>
      </Box>
    </Box>

    <Box sx={{display:'flex',justifyContent:'center'}}>
    <Typography variant="h6" textAlign='center' marginBottom='15px' color='#ff980e' fontWeight='bold'
      padding='5px 10px' bgcolor='#fff4e4' sx={{fontSize:'16px',width:'30%',borderRadius:'5px'}}>
        {units} units
    </Typography>
    </Box>


    const handleForwardClick =() =>{
     navigate('/carbon-footprint');
    }
    const handleBackClick = () => {
      navigate('/home-appliance')
    }
  return (
    <Box sx={{ padding: 3 }}>
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
        How many kilometers you drive per week?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 360,
          marginTop: 40,
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
            border: "none",
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

export default CurrentUnit
