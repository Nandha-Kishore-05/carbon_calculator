import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function KiloMeters() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/food-type');
  }
  return (
    <Typography variant='h5'>
      KiloMeters
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default KiloMeters
