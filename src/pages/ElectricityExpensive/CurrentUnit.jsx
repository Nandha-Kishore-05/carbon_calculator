import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function CurrentUnit() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/carbon-footprint');
  }
  return (
    <Typography variant='h5'>
     Units...
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default CurrentUnit
