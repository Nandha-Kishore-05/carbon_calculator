
import React from "react";
import sun from '../../assets/sun.png';
import tree from '../../assets/Trees@2x.png';
import {useNavigate} from "react-router-dom";
import './form.css';

function Form() {


  const inputFields = [
    { type: 'text', placeholder: 'Your Name *' },
    { type: 'number', placeholder: 'Phone Number *' },
    { type: 'text', placeholder: 'Email *' },
    { type: 'text', placeholder: 'Location *' },
    { type: 'text', placeholder: 'How many trees you want to plant? *' },
    { type: 'text', placeholder: 'Name to be planted on behalf of? *' },
  ];


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/submitted');
  }

  return (
    <div className='first'>
      <div className="head"></div>
      <div className="sun-con"><img src={sun} alt="Sun and clouds" /></div>
      <div className="middle"></div>
      <div className="text-animation">
        <div>
          Great job! You're making a positive <br />contribution to preserving our <br />green environment.
        </div>
      </div>
      <div className="form-animation">
        <div className="form-data">
          <div className="form-head">
            <div className="text-1">
              Fill out the form
            </div>
            <div className="text-2">
              Our teammate will reach out to you to help with your tree plantation
            </div>
          </div>
          <form className="input-box">
            <div className="input-fields">
              {inputFields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
          />
              ))}
            </div>
          </form>
          <div className="form-buttom">
            <div>
              <div className='button'>
                <button onClick={handleClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tree-con"><img className="tree" src={tree} alt="Sun and clouds" /> </div>
    </div>
  );


}

export default Form
