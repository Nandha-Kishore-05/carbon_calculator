import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(({ bgcolor, textcolor }) => ({
  backgroundColor: bgcolor || "white", 
  color: textcolor || "blue",      
  padding: '10px 60px',
  borderRadius: '8px',
  textTransform:'none',
  fontFamily:'Sarabun',
//   '&:hover': {
//     backgroundColor: textcolor || "#4287f5", 
//     color: bgcolor || "white",           
//   },
}));

function CustomButton({ 
    text = "Click Me", 
    variant = "contained", 
    bgcolor, 
    textcolor, 
    route, 
    startIcon, 
    endIcon ,
    sx={},
    funct=()=>{}
  }) {
  const navigate = useNavigate();
  const handleClick = () => {
     if(route){
      navigate(route);
      funct()
     }
  }
  return (

    <StyledButton
      variant={variant}
      bgcolor={bgcolor}
      textcolor={textcolor}
      onClick={handleClick}
      route={route}
      startIcon={startIcon}   
      endIcon={endIcon} 
      sx={sx}     
    >
      {text}
    </StyledButton>
  );
}

export default CustomButton

{/* <CustomButton
         
            variant="secondary" //or contained
         
            text="Back"
            sx={{
              width: "60%",
              textAlign: "center",
              color: "#0a3e66",
              padding: "15px",
              fontSize: "15px",
              backgroundColor: "white",
              ml: "20px",
              borderRadius: "10px",
              textTransform: "none",
            }}
          ></CustomButton> */}