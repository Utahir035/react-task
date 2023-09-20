import React, { useState } from "react";
import { FaUser, FaMobileAlt } from "react-icons/fa";
import {FiMail} from "react-icons/fi"
import {GoRocket} from "react-icons/go"
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    choice: "option1", // Default value for the radio buttons
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
        <div className="form-head"></div>
    <form className="responsive-form" onSubmit={handleSubmit}>

        <div className="head">
            <span className="rocket"><GoRocket/></span>
            <div>Marketing Business Campaign<h2 className="quote">Get a Quote</h2></div>
        </div>
        <div className="input-container">
        <input
        type="text"
        name="name"
        placeholder="Complete Name"
        value={formData.name || ""}
        onChange={handleChange}
      />
      <div className="icon">
        <div className="icon-flex">
       <span>|</span> <FaUser />
       </div>
      </div>
    </div>
      
    <div className="input-container">
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email || ""}
        onChange={handleChange}
      />
       <div className="icon">
        <div className="icon-flex">
       <span>|</span> <FiMail />
       </div>
      </div>
    </div>

    <div className="input-container">
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.email || ""}
        onChange={handleChange}
      />
       <div className="icon">
        <div className="icon-flex">
       <span>|</span> <FaMobileAlt />
       </div>
      </div>
    </div>

      <p className="method">Preffered consult Method:</p>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="choice"
            value="option1"
            checked={formData.choice === "option1"}
            onChange={handleChange}
          />
          Virtual
        </label>

        <label>
          <input
            type="radio"
            name="choice"
            value="option2"
            checked={formData.choice === "option2"}
            onChange={handleChange}
          />
          In Office
        </label>
      </div>

      <button type="submit">Book a Free Consult</button>
    </form>
    </div>
  );
};

export default Form;
