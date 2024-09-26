import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function CarbonFootPrint() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/form');
  }
  return (
    <Typography variant='h5'>
      Carbon Footprint calculation
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default CarbonFootPrint
