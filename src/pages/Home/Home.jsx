import React from 'react'
import CustomButton from '../../components/button/button'
import InputBox from '../../components/inputbox/inputbox'
import {useNavigate} from "react-router-dom"
function Home() {

  const navigate = useNavigate();
  const handleClick =() =>{
   navigate('/vehicle-type');
  }
  return (
    <div>
        <center>
      
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

export default Home
