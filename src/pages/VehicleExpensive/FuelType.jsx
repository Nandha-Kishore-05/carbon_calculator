import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function FuelType() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/kilometer');
  }
  return (
    <Typography variant='h5'>
      FuelType
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default FuelType
