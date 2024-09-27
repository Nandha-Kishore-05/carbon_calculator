import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Card({ image, text, bgColor, customStyles, backgroundSize }) {


  return (
    <Box
      sx={{
        width: 130,
        height: 130, 
        borderRadius: 2,
        bgcolor: bgColor || 'primary.main',
        border: `2px solid ${bgColor || 'primary.main'}`,
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: image?'space-between':'center',
        padding: 1,
        textAlign: 'center',
        '&:hover': {
          bgcolor: bgColor ? `${bgColor}80` : 'primary.dark',
          cursor: 'pointer',
        },
        ...customStyles,
      }}
    >
    {image &&  
      <Box
        sx={{
          width: '100%',
          height: '100px', 
          backgroundImage: `url(${image})`,
          backgroundSize: backgroundSize || '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
} 

<Typography
        variant="body2"
        sx={{
          fontSize: '15px',
          fontWeight: '520',
          color: '#000',
          marginTop: image ? 'auto' : 0, 
        }}
      >
        {text}
      </Typography>


      {/* <Typography variant="body2" sx={{ fontSize: '15px', fontWeight: '520', color: '#000' }}>
        {text}
      </Typography> */}
    </Box>
      
  );
}

export default Card;
