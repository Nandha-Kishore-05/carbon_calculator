import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import Box from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import {useNavigate} from "react-router-dom"

function CurrentUnit() {
    
    const navigate = useNavigate();
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
        How much electricity do you consume for a month?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 360,
          marginTop: 38,
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
