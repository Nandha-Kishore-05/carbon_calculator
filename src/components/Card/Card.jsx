import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Card({
  image,
  text,
  bgColor,
  customStyles,
  backgroundSize,
  isSelected,
  border,
  imageWidth,
  imageHeight,
}) {
  const renderText = () => {
    if (text === "Bicycle/Walk") {
      return (
        <>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: 580,
              color: "#000",
              marginBottom: "0px",
              width: "104px",
              height: "19px",
            }}
          >
            Bicycle/
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              fontWeight: 580,
              color: "#000",
              width: "104px",
              height: "19px",
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
          fontSize: "13px",
          fontWeight: 580,
          width: "90px",
          color: "#030911",
          wordBreak: 'normal',
          whiteSpace: 'normal', 
          overflowWrap: 'break-word', 
          textAlign: 'center',
          textOverflow: "ellipsis",
          textAlign: "center",
          width: "100px",
          display:"flex",
          alignItems:"center",
          justifyContent:'center',
          
          
        }}
      >
        <div style={{display:'flex',alignItems:"center",justifyContent:'center',width:"80%",height:"100%"}}>
        {text}
        </div>
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        borderRadius: 2,
        bgcolor: bgColor || "primary.main",
        border: isSelected
          ? `2px solid ${border || "#EB7E74"}`
          : `2px solid transparent`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
        textAlign: "center",
        "&:hover": {
          cursor: "pointer",
        },
        ...customStyles,
      }}
    >
      {image && (
        <Box
          sx={{
            width: imageWidth || "65%",
            height: imageHeight || "40%",
            backgroundImage: `url(${image})`,
            backgroundSize: backgroundSize || "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom: "1px",
          }}
        />
      )}

      {renderText()}
    </Box>
  );
}

export default Card;
