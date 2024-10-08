import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import CustomButton from "../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Slider, Divider, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { setkm_per_week } from "../../features/karma.jsx";
import {
  addindex,
  addval,
  subindex,
  setindex,
} from "../../features/header.jsx";

import { useDispatch } from "react-redux";
function KiloMeters() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(
    useSelector((state) => state.karma.value.km_per_week)
  );
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    dispatch(setkm_per_week({ km_per_week: newValue }));
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(setindex({ index: 3 }));
  }, []);
  return (
    <>
      <Typography variant="h5">
        <Box
          sx={{
            fontSize: "14px",
            color: "black",
            marginTop: "60px",
            marginBottom: "30px",
            textAlign: "center",
            fontFamily: "Nunito",
            width:"350px",
            fontWeight:"800",
            ml:"15px"
          }}
        >
          <b>How many kilometers do you drive per week?</b>
        </Box>
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Divider
              orientation="vertical"
              sx={{
                width: "4px",
                height: "20px",
                bgcolor: "#0E70EB",
                borderRadius: "4px",
              }}
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
              sx={{
                width: "4px",
                height: "20px",
                bgcolor: "#0E70EB",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">
              <b>10 km</b>
            </Typography>
            <Typography variant="body2">
              <b>250 km</b>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h6"
          textAlign="center"
          marginBottom="15px"
          color="#fea062"
          fontWeight="bold"
          padding="5px 5px"
          bgcolor="#fff4e4"
          sx={{ fontSize: "14px", width: "21%", borderRadius: "5px" }}
        >
          {value} km
        </Typography>
      </Box>

      <Box
        sx={{
          height: "55px",
          position: "absolute",
          bottom: "25px",
          left: "20px",
          right: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <CustomButton
            text="Back"
            variant="secondary"
            textcolor=" #1d78ec"
            route="/fuel-type"
            sx={{ width: "200px", backgroundColor: "#e6eefa" }}
            funct={() => {
              // dispatch(subindex());
            }}
          />

          <CustomButton
            text="Next"
            variant="contained"
            bgcolor="#0e70eb"
            textcolor="white"
            route="/food-type"
            sx={{ width: "200px" }}
            funct={() => {
              dispatch(setkm_per_week({ km_per_week: value }));
              dispatch(addval({ val: value }));

              // dispatch(addindex());
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default KiloMeters;
