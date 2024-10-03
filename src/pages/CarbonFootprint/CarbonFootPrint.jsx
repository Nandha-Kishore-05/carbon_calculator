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
import high from "../../assets/high.png";
import { addindex, addval, initial } from "../../features/header.jsx";

function CarbonFootPrint() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.karma.value);
  const [average, setaverage] = useState("25%");
  const [averagetitle, setaveragetitle] = useState("");
  const [karmavalue, setkarmavalue] = useState("0");
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("http://localhost:8080/crayon/calculate", user)
      .then((response) => {
        setkarmavalue(response.data.annual_carbon_footprint);
        setaveragetitle(response.data.comparison_to_average);
        setUserId(response.data.user_id);
      });
  }, [user]);

  useEffect(() => {
    dispatch(initial());
  }, [dispatch]);

  const handleClick = (id) => {
    navigate("/form", { state: { userId: id } });
  };

  const handleRemindMeLater = () => {
    const dataToSend = {
      user_id: userId,
      status: "0"
    };
console.log(dataToSend)
    axios.post("http://localhost:8080/crayon/planatationstatus", dataToSend)
      .then((response) => {
        console.log("Status sent successfully:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error sending status:", error);
      });
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
            <span style={{ fontSize: "13px" ,fontWeight:"700"}}>Commute</span>
          </div>
          <div className="separtor-items">
            <span className="rectangle2"> </span>{" "}
            <span style={{ fontSize: "13px" ,fontWeight:"700" }}>Food</span>
          </div>
          <div className="separtor-items">
            <span className="rectangle3"> </span>{" "}
            <span style={{ fontSize: "11px",fontWeight:"700" }}>Applications</span>
          </div>
        </div>
        <div className="average">
          <div className="average-box" style={{ border: "none", padding: "5px" }}>
            <span style={{ display: 'flex' }}>
              <img src={high} style={{ marginLeft: "3px" }} alt="High" />
              &ensp; {averagetitle}
            </span>
          </div>
        </div>
      </div>
      <div className="evergreen">
        <div className="tree">
          <img src={tree} alt="Tree" />
        </div>
        <div className="footerheader">
          Offset your excess carbon footprint by
        </div>
        <div className="plantingsapling">Planting 15 Saplings</div>
        <div className="plantnowoffset" onClick={() => handleClick(userId)}>
          <div className="plant-button">Plant now to offset</div>
        </div>
      </div>
      <div className="remindme" style={{fontFamily:"Nunito"}}onClick={handleRemindMeLater}>
        Remind me Later
      </div>
    </div>
  );
}

export default CarbonFootPrint;
