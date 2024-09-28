import  Typography  from '@mui/material/Typography'
import React from 'react'
// import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
import CustomButton from '../../components/button/CustomButton'

function NoOfVehicle() {
    const navigate = useNavigate();

  const handleForwardClick =() =>{
   navigate('/fuel-type');
  }

  const handleBackClick = () => {
    navigate('/vehicle-type')
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
        How many vehicles do you own?
      </Typography>
        
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          gap: 2,                  
          alignItems: 'center',    
          marginTop: 3,           
        }}
      >
        <CustomButton 
          text="Back" 
          variant="secondary"  
          textcolor="#2e76db" 
          route="/vehicle-type"
          sx={{ width: '200px',
            backgroundColor:"#cddff7"
           }}  
        />

        <CustomButton 
          text="next" 
          variant="contained" 
          bgcolor="#0671c9" 
          textcolor="white" 
          route="/fuel-type"
          sx={{ width: '200px' }}  
        />
      </Box>
      
    </Box>
  )
}

export default NoOfVehicle
