import React, { useState, useEffect } from "react";
import sun from '../../assets/sun.png';
import tree from '../../assets/Trees@2x.png';
import { useNavigate, useLocation } from "react-router-dom";
import './form.css';

function Form() {
  const location = useLocation(); // To access the state from navigate
  const userId = location.state?.userId; // Get userId from state
  
  // Log userId when the component is mounted
  useEffect(() => {
    console.log("User ID received in Form:", userId);
  }, [userId]);

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",  // Keep as string
    email: "",
    location: "",
    trees_to_plant: "",  // Updated to match backend field
    name_on_behalf: ""   // Updated to match backend field
  });

  const [errors, setErrors] = useState({
    name: false,
    phone_number: false, // Updated
    email: false,
    location: false,
    trees_to_plant: false, // Updated
    name_on_behalf: false, // Updated
  });

  const inputFields = [
    { type: 'text', placeholder: 'Your Name', name: 'name' },
    { type: 'text', placeholder: 'Phone Number', name: 'phone_number' },  // Keep as text for string
    { type: 'text', placeholder: 'Email', name: 'email' },
    { type: 'text', placeholder: 'Location', name: 'location' },
    { type: 'number', placeholder: 'How many trees you want to plant?', name: 'trees_to_plant' }, // Updated to number
    { type: 'text', placeholder: 'Name to be planted on behalf of?', name: 'name_on_behalf' } // Updated
  ];

  const navigate = useNavigate();
  const handleClick = () => {
    const newErrors = {
      name: formData.name === "",
      phone_number: formData.phone_number === "", // Check if empty
      email: formData.email === "",
      location: formData.location === "",
      trees_to_plant: formData.trees_to_plant === "", // Updated
      name_on_behalf: formData.name_on_behalf === "", // Updated
    };
  
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(error => error === true);
  
    if (!hasErrors) {
      // Send form data with phone_number as a string
      const dataToSend = {
        ...formData,
        trees_to_plant: parseInt(formData.trees_to_plant, 10),   // Convert number of trees to integer
        user_id: parseInt(userId, 10),  // Ensure userId is sent as an integer
      };
      console.log(dataToSend);

      // Send the data to the backend
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
          navigate("/submitted"); // Navigate after successful submission
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
