import  Typography  from '@mui/material/Typography'
import React from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from "react-router-dom"

function Form() {
    const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/form');
  }
  return (
    <Typography variant='h5'>
      registration form...
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
    </Typography>
  )
}

export default Form
