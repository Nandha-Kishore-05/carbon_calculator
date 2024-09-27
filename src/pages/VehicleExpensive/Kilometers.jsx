import Typography from '@mui/material/Typography';
import React from 'react';
import { Button, Box, Slider, Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";


function KiloMeters() {
  const navigate = useNavigate();

  const handleForwardClick = () => {
    navigate('/food-type');
  };

  const handleBackClick = () => {
    navigate('/fuel-type');
  };

  const [value, setValue] = React.useState(80);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h5">
        <Box
          sx={{
            fontSize: '16px',
            color: 'black',
            marginTop: '40px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <b>How many kilometers do you drive per week?</b>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <Box sx={{ width: '90%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Divider
                orientation="vertical"
                sx={{ width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }}
              />
              <Slider
                aria-label="CustomSlider"
                value={value}
                min={10}
                max={250}
                step={1}
                valueLabelDisplay="auto"
                onChange={handleChange}
              />
              <Divider
                orientation="vertical"
                sx={{ width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">
                <b>10</b>
              </Typography>
              <Typography variant="body2">
                <b>250</b>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            textAlign="center"
            marginBottom="15px"
            color="#fea062"
            fontWeight="bold"
            padding="5px 5px"
            bgcolor="#fff4e4"
            sx={{ fontSize: '16px', width: '21%', borderRadius: '5px' }}
          >
            {value} km
          </Typography>
        </Box>
      </Typography>

      <Box sx={{ padding: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: 360, marginTop: 17 }}>
            <Button
              variant="outlined"
              sx={{
                width: "45%",
                height: "45px",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#438cfa",
                backgroundColor: "#c9e1f5",
                textTransform: "none",
                padding: 2,
               
              }}
              onClick={handleBackClick}
            >
              Back
            </Button>

            <Button
              variant="contained"
              sx={{
                width: "48%",
                height: "45px",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "15px",
                backgroundColor: "#0671c9",
                textTransform: "none",
                color: "white",
                padding: 2,
              }}
              onClick={handleForwardClick}
            >
              Next
            </Button>
          </Box>
       
      </Box>
    </>
  );
}

export default KiloMeters;
