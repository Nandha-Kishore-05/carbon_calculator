import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function HomeAppliances() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/current-unit');
  }
  return (
    <Typography variant='h5'>
      Home appliances
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default HomeAppliances
