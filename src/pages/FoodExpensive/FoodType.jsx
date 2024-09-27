import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function FoodType() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/home-appliance');
  }
  return (
    <Typography variant='h5'>
     FoodType..
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default FoodType
