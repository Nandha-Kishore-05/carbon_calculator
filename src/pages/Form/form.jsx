
import React, { useState } from "react";
import sun from '../../assets/sun.png';
import tree from '../../assets/Trees@2x.png';
import {useNavigate} from "react-router-dom"
import './form.css';

function Form() {
    const [name,setname]=useState("")
    const [number,setnumber]=useState("")
    const [email,setemail]=useState("")
    const [location,setLocation]=useState("")
    const [nooftree,setnooftree]=useState("")
    const [defaultname,setdefaultname]=useState("")
  const navigate = useNavigate();

  const handleClick =() =>{
    // axios
    // .post("http://localhost:8080/crayon/calculate", {
    //   vehicle_type_id: 2,
    //   number_of_vehicles: 2,
    //   fuel_type_id: 2,
    //   km_per_week: 86,
    //   diet_type_id: 1,
    //   appliance_id: 1,
    //   electricity_consumed: 100,
    // })
    // .then((response) => {
      
    //  console.log("thank you")
    // });
   navigate('/submitted');
  }

   
  return (
    <div className='first'>
        <div className='head'></div>
        <img className='sun-cloud' src={sun} alt="Sun and clouds" />
        <div className='middle'></div>
        <div class="text-animation">
            <div>
                Great job! You're making a positive <br/>contribution to preserving our <br/>green environment.
            </div>
        </div>
        <div class="form-animation">
            
          
            <div className="form-data">
            <div className="form-head">
                <div className="text-1">
                    Fill out the form
                </div>
                <div className="text-2">
                    Our teamnate will reach out to you to help with your tree plantation
                </div>
            </div>
            <form className="input">
                    <div className="input-fields">
                      <input
                          type="text"
                            placeholder='Your Name'
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="input-fields">
                      <input
                          type='number' 
                          placeholder='Phone Number'
                          value={number}
                          onChange={(e)=>setnumber(e.target.value)}
                      />
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                        />
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            placeholder='Location'
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            
                        />
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            placeholder='How many tress you want to plant?'
                            value={nooftree}
                            onChange={(e)=>setnooftree(e.target.value)}

                        />
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            placeholder='Name to be planted on behalf on?'
                            value={defaultname}
                            onChange={(e)=>{setdefaultname(e.target.value)}}
                        />
                    </div>
            </form>
            <div className="form-buttom">
                <div>
                <div className='button'>
                        <button onClick={handleClick} >Submit</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <img className='tree' src={tree} alt="Sun and clouds" />
    </div>
  );


}

export default Form
