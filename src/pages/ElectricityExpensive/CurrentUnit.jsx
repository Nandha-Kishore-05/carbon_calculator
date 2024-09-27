import Typography from '@mui/material/Typography';
import React from 'react';
import { Button, Box, Slider, Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";

function CurrentUnit() {
  const navigate = useNavigate();

  const [units, setUnits] = React.useState(200);

  const handleUnitsChange = (event, newValue) => {
    setUnits(newValue);
  };

  const handleForwardClick = () => {
    navigate('/carbon-footprint');
  };

  const handleBackClick = () => {
    navigate('/home-appliance');
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
          <b>How much electricity do you consume per month?</b>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <Box sx={{ width: '90%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Divider
                orientation="vertical"
                sx={{ width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }}
              />
              <Slider
                aria-label="ElectricityUnitsConsumed"
                value={units}
                valueLabelDisplay="auto"
                step={1}
                min={100}
                max={1000}
                onChange={handleUnitsChange}
              />
              <Divider
                orientation="vertical"
                sx={{ width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                <b>100 units</b>
              </Typography>
              <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                <b>1000 units</b>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            textAlign="center"
            marginBottom="15px"
            color="#ff980e"
            fontWeight="bold"
            padding="5px 10px"
            bgcolor="#fff4e4"
            sx={{ fontSize: '16px', width: '30%', borderRadius: '5px' }}
          >
            {units} units
          </Typography>
        </Box>

        <Box sx={{ padding: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: 360,marginTop:18 }}>
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
      </Typography>
    </>
  );
}

export default CurrentUnit;
