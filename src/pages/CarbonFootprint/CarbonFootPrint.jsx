import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import tree from "../../assets/Tree.png";
import CustomButton from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import "./carbon.css";
import GaugeChart from "./GaugeChart";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function CarbonFootPrint() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.value);
  console.log(user)
  const [average, setaverage] = useState("25%");
  const [averagetitle, setaveragetitle] = useState("");
  const [karmavalue, setkarmavalue] = useState("0");
  
  useEffect(() => {
    axios
      .post("http://localhost:8080/crayon/calculate",user)
      .then((response) => {
        
        if (
          response.data.comparison_to_average ==
          "Your carbon footprint is higher than the average"
        ) {
          const text =
            "Which is " +
            parseInt(response.data.percentage_difference) / 10 +
            " higher than average";
          setaveragetitle(text);
          setkarmavalue(response.data.annual_carbon_footprint);
        }
      });
  }, []);
  const handleClick = () => {
    navigate("/form");
  };
  return (
    <div className="summarycontent">
      <div className="speedometer">
        <div className="speedometertitle">Your annual Carbon footprint</div>
        <div className="speedometerbar">
          <GaugeChart karmavalue={karmavalue}></GaugeChart>
        </div>
        <div className="seperator">
          <div className="separtor-items">
            <span className="rectangle1"> </span>{" "}
            <span style={{ fontSize: "12px" }}>Commute</span>
          </div>
          <div className="separtor-items">
            <span className="rectangle2"> </span>{" "}
            <span style={{ fontSize: "12px" }}>Food</span>
          </div>
          <div className="separtor-items">
            <span className="rectangle3"> </span>{" "}
            <span style={{ fontSize: "12px" }}>Applications</span>
          </div>
        </div>
        <div className="average">
          <div className="average-box"> {averagetitle}</div>
        </div>
      </div>
      <div className="evergreen">
        <div className="tree">
          <img src={tree}></img>
        </div>
        <div className="footerheader">
          Offset your excess carbon footprint by
        </div>
        <div className="plantingsapling">Planting 15 Saplings</div>
        <div
          className="plantnowoffset"
          onClick={() => {
            handleClick();
          }}
        >
          <div className="plant-button">Plant now to offset</div>
        </div>
      </div>
      <div className="remindme">Remind me Later</div>
    </div>
  );
}

export default CarbonFootPrint;
