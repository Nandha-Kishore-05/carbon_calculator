import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function NoOfVehicle() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/fuel-type');
  }
  return (
    <Typography variant='h5'>
      Number of vehicle
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default NoOfVehicle
