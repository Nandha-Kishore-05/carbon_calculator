import React from 'react';

import  Box from '@mui/material/Box';

function ButtonContainer() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', 
          gap: 2,                  
          alignItems: 'center',    
          marginTop: 3,           
        }}
      >
        <CustomButton 
          text="Later" 
          variant="outlined" 
          bgcolor="transparent" 
          textcolor="#4287f5" 
          route="/later"
          sx={{ width: '200px' }}  
        />
  
      
        <CustomButton 
          text="Calculate & Offset" 
          variant="contained" 
          bgcolor="#0671c9" 
          textcolor="white" 
          route="/calculate"
          sx={{ width: '200px' }}  
        />
      </Box>
    );
  }
  
  export default ButtonContainer;