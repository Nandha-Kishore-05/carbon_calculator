// ImgWrapper.jsx
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const OverlayImg = styled(Box)(({ theme, width, height }) => ({
  position: 'relative',
  width: width || '100px',  // Default width
  height: height || '60px', // Default height
  borderRadius: '8px',
  overflow: 'hidden',
  marginRight: '16px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(232, 14, 167, 0.4)', // Semi-transparent pink overlay
    zIndex: 0,
  },
}));

function ImgWrapper({ src, alt, overlayColor = 'rgba(232, 14, 167, 0.4)', width, height }) {
  return (
    <OverlayImg
      width={width}
      height={height}
      sx={{
        '&::before': {
          backgroundColor: overlayColor,
        },
      }}
    >
      <img src={src} alt={alt} />
    </OverlayImg>
  );
}

export default ImgWrapper;
