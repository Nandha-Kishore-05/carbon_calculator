import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom";
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";




function CurrentUnit() {
    
    const navigate = useNavigate();


  const handleClick =() =>{
   navigate('/carbon-footprint');
  }

  const [units, setUnits] = React.useState(200); 

  const handleUnitsChange = (event, newValue) => {
    setUnits(newValue); 
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
