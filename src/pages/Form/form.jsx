import React, { useState, useEffect } from "react";
import sun from '../../assets/sun.png';
import tree from '../../assets/Trees@2x.png';
import { useNavigate, useLocation } from "react-router-dom";
import './form.css';

function Form() {
  const location = useLocation(); 
  const userId = location.state?.userId; 
  

  useEffect(() => {
    console.log("User ID received in Form:", userId);
  }, [userId]);

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "", 
    email: "",
    location: "",
    trees_to_plant: "", 
    name_on_behalf: ""  
  });

  const [errors, setErrors] = useState({
    name: false,
    phone_number: false,
    email: false,
    location: false,
    trees_to_plant: false,
    name_on_behalf: false, 
  });

  const inputFields = [
    { type: 'text', placeholder: 'Your Name', name: 'name' },
    { type: 'text', placeholder: 'Phone Number', name: 'phone_number' }, 
    { type: 'text', placeholder: 'Email', name: 'email' },
    { type: 'text', placeholder: 'Location', name: 'location' },
    { type: 'number', placeholder: 'How many trees you want to plant?', name: 'trees_to_plant' }, 
    { type: 'text', placeholder: 'Name to be planted on behalf of?', name: 'name_on_behalf' } 
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    const newErrors = {
      name: formData.name === "",
      phone_number: formData.phone_number === "",
      email: formData.email === "",
      location: formData.location === "",
      trees_to_plant: formData.trees_to_plant === "", 
      name_on_behalf: formData.name_on_behalf === "", 
    };
  
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(error => error === true);
  
    if (!hasErrors) {

      const dataToSend = {
        ...formData,
        trees_to_plant: parseInt(formData.trees_to_plant, 10),   
        user_id: userId,  
        status: "1" 
      };
  
      
      console.log("Data to send:", dataToSend);
  
 
      fetch("http://localhost:8080/crayon/plantation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          navigate("/submitted"); 
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (value !== "") {
      setErrors(prevState => ({
        ...prevState,
        [name]: false
      }));
    }
  };

  return (
    <div className='first'>
      <div className="head"></div>
      <div className="sun-con"><img style={{height:'100%', width:'100%'}} src={sun} alt="Sun and clouds" /></div>
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
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    style={{
                      border: errors[field.name] ? '2px solid red' : '1px solid #ccc'
                    }}
                  />
                  {!formData[field.name] && (
                    <span className="required-symbol">
                      <span>{field.placeholder}</span>
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
      <div className="tree-con"><img style={{height:'100%', width:'100%'}} src={tree} alt="Sun and clouds" /></div>
    </div>
  );
}

export default Form;
