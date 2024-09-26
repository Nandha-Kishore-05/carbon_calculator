import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function VehicleType() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/no-of-vehicle');
  }
  return (
    <Typography variant='h5'>
      Vehicle Type
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default VehicleType
