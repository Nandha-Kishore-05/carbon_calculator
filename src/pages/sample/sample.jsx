import React from 'react'
import CustomButton from '../../components/button/button'
// import CustomButton from '../../components/button/CustomButton';
import InputBox from '../../components/inputbox/inputbox'
import {useNavigate} from "react-router-dom"
function Sample() {

  const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/vehicle-type');
  }
  return (
    <div>
        <center>
      <h1 style={{marginTop:'13%'}}>Welcome To Team Boom</h1>
      <h2 style={{marginTop:'3%'}}>Just add   <strong style={{fontSize:'30px'}}>/sample</strong> to your url and  check how router is working</h2><br />
      <h2>Button and Inputbox use like this </h2><br />
      <CustomButton
                onClick={handleClick}
                width={150}
                label="Apply Leave"
            
              />
              <div style={{width:'220px'}}>
               <InputBox label="Name" type="text" placeholder ="Name" margin={20} />
               </div>
      </center>
    </div>
  )
}

export default Sample
