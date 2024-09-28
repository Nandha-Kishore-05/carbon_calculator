import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Card({ image, text, bgColor, customStyles, backgroundSize }) {
  const renderText = () => {
    if (text === "Bicycle/<br />Walk") {
      return (
        <>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              fontWeight: '580',
              color: '#000',
              marginBottom: '0px',
            }}
          >
            Bicycle/
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              fontWeight: '580',
              color: '#000',
            }}
          >
            Walk
          </Typography>
        </>
      );
    }
    return (
      <Typography
        variant="body2"
        sx={{
          fontSize: '14px',
              fontWeight: '580',
          color: '#000',
        }}
      >
        {text}
      </Typography>
    );
  };

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
        justifyContent: 'center',
        padding: 1,
        textAlign: 'center',
        '&:hover': {
          
          cursor: 'pointer',
        },
        ...customStyles,
      }}
    >
      {image &&  
        <Box
          sx={{
            width: '90%',
            height: '50%', 
            backgroundImage: `url(${image})`,
            backgroundSize: backgroundSize || '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginBottom: '3px', 
          }}
        />
      } 

      {renderText()} 
    </Box>
  );
}

export default Card;
