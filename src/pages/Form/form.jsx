import React, { useState } from "react";
import sun from '../../assets/sun.png';
import tree from '../../assets/Trees@2x.png';
import { useNavigate } from "react-router-dom";
import './form.css';

function Form() {
  // State to track if each input is filled or not
  const [filledFields, setFilledFields] = useState({
    name: false,
    phone: false,
    email: false,
    location: false,
    trees: false,
    behalf: false,
  });

  const inputFields = [
    { type: 'text', placeholder: 'Your Name', name: 'name' },
    { type: 'number', placeholder: 'Phone Number', name: 'phone' },
    { type: 'text', placeholder: 'Email', name: 'email' },
    { type: 'text', placeholder: 'Location', name: 'location' },
    { type: 'text', placeholder: 'How many trees you want to plant?', name: 'trees' },
    { type: 'text', placeholder: 'Name to be planted on behalf of?', name: 'behalf' },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/submitted');
  };

  // Handle input change and update the filled state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilledFields(prevState => ({
      ...prevState,
      [name]: value !== "" // Mark field as filled if it has a value
    }));
  };

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
              Fill out this form
            </div>
            <div className="text-2">
              Our teammate will reach out to you to help with your tree plantation
            </div>
          </div>
          <form className="input-box">
            <div className="input-fields">
              {inputFields.map((field, index) => (
                <div key={index} className="input-wrapper">
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={handleInputChange}
                  />
                  
                  {!filledFields[field.name] && (
                    <span className="required-symbol">
                      <spam>{field.placeholder}</spam>
                      <span className="symbol"> *</span>
                    </span>
                  )}
                </div>
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

export default Form;