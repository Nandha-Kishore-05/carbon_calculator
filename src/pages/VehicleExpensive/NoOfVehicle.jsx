import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Slider, Button, Divider } from '@mui/material';

function NoOfVehicle() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/fuel-type');
    };

    const [sliderValue, setSliderValue] = React.useState(4);
    
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    const marks = [
        { value: 2, label: <strong>2</strong> },
        { value: 4, label: <strong>4</strong> },
        { value: 6, label: <strong>6</strong> },
        { value: 8, label: <strong>8</strong> },
        { value: 10, label: <strong>10</strong> }
    ];

    return (
        <Typography variant='h5'>
            <Box sx={{ fontSize: '16px', color: 'black', marginTop: '40px', marginBottom: '50px', textAlign: 'center' }}>
                <b>How many vehicles do you own?</b>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <Box sx={{ width: '85%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                        <Divider orientation="vertical" sx={{ top: '466px', left: '20px', width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px', zIndex: '1' }} />
                        <Slider
                            aria-label="Number of Vehicles"
                            defaultValue={4}
                            valueLabelDisplay="auto"
                            step={2}
                            min={2}
                            max={10}
                            marks={marks}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            sx={{
                                top: '480px',
                                position: 'absolute',
                                left: '39px',
                                width: '321px',
                                height: '4px',
                                zIndex:2,
                            }}
                        />
                        <Divider orientation="vertical" sx={{ top: '466px', left: '351px', width: '4px', height: '20px', bgcolor: '#0E70EB', borderRadius: '4px' }} />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6" textAlign='center' marginBottom='15px' color='#fea062' fontWeight='bold'
                    padding='5px 10px' bgcolor='#fff4e4' sx={{ fontSize: '16px', width: '30%', borderRadius: '5px' }}>
                    {sliderValue} vehicles
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '130px' }}>
                <Button
                    variant="outlined"
                    label="Later"
                    onClick={() => navigate(-1)} 
                    sx={{
                        width: "44%",
                        height: "49px",
                        
                        borderRadius: "10px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "#1f79ec",
                        border: "none",
                        backgroundColor: "#deeaf9",
                        textTransform: "none",
                        padding: 3,
                        marginLeft:2
                    }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    label="Calculate & offset"
                    onClick={handleClick} 
                    sx={{
                        width: "44%",
                        height: "45px",
                        borderRadius: "10px",
                        fontWeight: "light",
                        fontSize: "15px",
                        backgroundColor: "#0671c9",
                        textTransform: "none",
                        color: "white",
                        padding: 3,
                        marginRight:2
                    }}
                >
                    Next
                </Button>
            </Box>
        </Typography>
    );
}

export default NoOfVehicle;
