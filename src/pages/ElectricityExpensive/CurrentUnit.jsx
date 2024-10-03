import Typography from '@mui/material/Typography';
import React from 'react';
import { Button, Box, Slider, Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CustomButton from '../../components/button/CustomButton';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setelectricity_consumed} from '../../features/karma.jsx'
import { addindex, addval,subindex,setindex } from "../../features/header.jsx";
import { useEffect } from 'react';

function CurrentUnit() {
  const [units, setUnits] = React.useState(useSelector((state) => state.karma.value.electricity_consumed))
  const dispatch=useDispatch();
  const navigate = useNavigate();
  
  const handleUnitsChange = (event, newValue) => {
    dispatch(setelectricity_consumed({electricity_consumed:newValue}))

    setUnits(newValue);
  };
  const handleForwardClick = () => {
    navigate('/carbon-footprint');
  };

  const handleBackClick = () => {
    // dispatch(subindex());
    navigate('/home-appliance');
  };
  useEffect(()=>{
    dispatch(setindex({index:6}))

},[])

  return (
    <>
      <Typography variant="h5">
        <Box
          sx={{
            fontSize: '16px',
            color: 'black',
            marginTop: '50px',
            marginBottom: '20px',
            textAlign: 'center',
            fontFamily: "Nunito",
            width:"340px",
            ml:"20px"

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
              <Typography variant="body2" sx={{ cursor: 'pointer',fontFamily: "Nunito" }}>
                <b>100 units</b>
              </Typography>
              <Typography variant="body2" sx={{ cursor: 'pointer',fontFamily: "Nunito" }}>
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
            sx={{ fontSize: '16px', width: '30%', borderRadius: '5px',fontFamily: "Nunito" }}
          >
            {units} units
          </Typography>
        </Box>

        <Box  sx={{height:"55px", position: 'absolute',
          bottom: '25px',
          left: '20px',
          right: '20px',}}>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          gap: 2,                  
          alignItems: 'center',           
        }}
      >
        <CustomButton 
          text="Calculate Carbon Footprint" 
          variant="contained" 
          bgcolor="#0e70eb" 
          textcolor="white" 
          route="/carbon-footprint"
          sx={{ width: '400px' }}  
        />
        </Box>
        </Box>
      </Typography>
    </>
  );
}

export default CurrentUnit;