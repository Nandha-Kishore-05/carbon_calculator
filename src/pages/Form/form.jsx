import React from "react";
import sun from '../../assets/sun.png';
import tree from '../../assets/Trees@2x.png';
import './form.css';

function FormSummition() {
   
  return (
    <div className='first'>
        <div className='head'></div>
        <img className='sun-cloud' src={sun} alt="Sun and clouds" />
        <div className='middle'></div>
        <div class="text-animation">
            Great job! You're making a positive <br/>contribution to preserving our <br/>green environment.
        </div>
        <div class="form-animation">
            
            <div className="form-data">
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
        <img className='tree' src={tree} alt="Sun and clouds" />
    </div>
  );

}
export default FormSummition