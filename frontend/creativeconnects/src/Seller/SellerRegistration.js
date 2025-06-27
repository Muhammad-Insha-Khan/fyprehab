import React, { useState } from 'react';
<<<<<<< HEAD
=======
import 'react-phone-input-2/lib/style.css'; // Import styles for react-phone-input-2
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
import PhoneInput from 'react-phone-input-2';
import Swal from 'sweetalert2';
import '../styles/SellerRegistration.css';
import SellerContractABI from "../contracts/SellerContract.json"
import getWeb3 from "../utils/web3";
<<<<<<< HEAD
import logo from "./logo.png";

const SellerRegistration = () => {


=======


const SellerRegistration = () => {
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    fieldDomain: '',
    skills: [],
    skillToAdd: '',
  });

  const fieldDomains = [
    'IT', 'Software Development', 'Technician', 'Design', 'Business'
  ];

  const skills = [
    'Web Development', 'Graphic Design', 'App Development', 'Technical Support',
    'SEO', 'Data Analysis', 'Marketing', 'Photography', 'Project Management', 'UI/UX Design'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSkill = () => {
    const selectedSkill = formData.skillToAdd;
<<<<<<< HEAD

=======
    
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    if (!selectedSkill) {
      Swal.fire({
        title: 'Invalid Selection',
        text: 'Please select a valid interest to add.',
        icon: 'error',
        background: '#00796b',
        color: 'white',
      });
      return;
    }

    if (formData.skills.length < 3 && selectedSkill && !formData.skills.includes(selectedSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, selectedSkill],
        skillToAdd: '',
      });
<<<<<<< HEAD
    } else if (formData.skills.length >= 3) {
=======
    }else if (formData.skills.length >= 3) {
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      Swal.fire({
        title: 'Limit Reached',
        text: 'You can only select up to 3 interests.',
        icon: 'warning',
        background: '#00796b',
        color: 'white',
      });
    } else {
      Swal.fire({
        title: 'Duplicate Skills',
        text: 'This interest has already been added.',
        icon: 'error',
        background: '#00796b',
        color: 'white',
      });
    }
  };
  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: 'Password Mismatch',
        text: 'Passwords do not match.',
        icon: 'error',
        background: '#00796b',
        color: '#4caf50',
      });
      return false;
    }

    if (!formData.email.includes('@')) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        icon: 'error',
        background: '#00796b',
        color: '#4caf50',
      });
      return false;
    }

    return true;
  };
<<<<<<< HEAD
  const handleSubmit = async (e) => {

    ///
    e.preventDefault();
    try {
=======
const handleSubmit = async (e) => {
  
  ///
  e.preventDefault();
  try {
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SellerContractABI.networks[networkId];

      if (!deployedNetwork) {
<<<<<<< HEAD
        alert("Error: Smart contract not deployed on this network.");
        return;
      }

      const contract = new web3.eth.Contract(
        SellerContractABI.abi,
        deployedNetwork.address
=======
          alert("Error: Smart contract not deployed on this network.");
          return;
      }

      const contract = new web3.eth.Contract(
          SellerContractABI.abi,
          deployedNetwork.address
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      );

      // Check if email already exists in the blockchain
      const emailExists = await contract.methods.isEmailRegistered(formData.email).call();
      if (emailExists) {
<<<<<<< HEAD
        Swal.fire({
          title: "Error",
          text: "This email is already registered. Please use a different email.",
          icon: "error",
        });
        return;
=======
          Swal.fire({
              title: "Error",
              text: "This email is already registered. Please use a different email.",
              icon: "error",
          });
          return;
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      }

      // Register the seller if email is not found
      await contract.methods
<<<<<<< HEAD
        .registerSeller(
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.phone,
          formData.fieldDomain,
          skills
        )
        .send({ from: accounts[0], gas: 600000 });

      Swal.fire({
        title: "Registration Successful",
        text: "You have been registered on the blockchain!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        text: error.message,
        icon: "error",
      });
    }
















    /////////////////////////
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/seller/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Registration successful. Check your email for confirmation.',
          icon: 'success',
          background: '#00796b',
          color: 'white',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          fieldDomain: '',
          skills: [],
          skillToAdd: '',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: data.message,
          icon: 'error',
          background: '#00796b',
          color: 'white',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
=======
          .registerSeller(
              formData.firstName,
              formData.lastName,
              formData.email,
              formData.phone,
              formData.fieldDomain,
              skills
          )
          .send({ from: accounts[0], gas: 600000 });

      Swal.fire({
          title: "Registration Successful",
          text: "You have been registered on the blockchain!",
          icon: "success",
      });
  } catch (error) {
      Swal.fire({
          title: "Registration Failed",
          text: error.message,
          icon: "error",
      });
  }
















  /////////////////////////
  if (!validateForm()) {
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/seller/register', {
      method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        title: 'Success',
        text: 'Registration successful. Check your email for confirmation.',
        icon: 'success',
        background: '#00796b',
        color: 'white',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        fieldDomain: '',
        skills: [],
        skillToAdd: '',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: data.message,
        icon: 'error',
        background: '#00796b',
        color: 'white',
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59


  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      fieldDomain: '',
      skills: [],
      skillToAdd: '',
    });

    Swal.fire({
      title: 'Form Cleared',
      text: 'All input fields have been reset.',
      icon: 'info',
      background: '#00796b',
      color: 'white',
    });
  };

  const handleBack = () => {
    // This could redirect to the previous page or reset the form without reload
    window.location.reload(); // Go back to the previous page without a page reload
  };

  return (
    <div className="Seller-container">
      <div className="Seller-col1">
<<<<<<< HEAD
        <h1 className='SellerWelHeading'>Welcome to Creative Connects</h1>
        <p className="SellerWelPara">Join a vibrant community where your expertise meets new opportunities. Share and grow your skills.</p>
        <button className="Sellerback" onClick={handleBack}>Back</button>
        <img src={logo} alt="Logo" style={{ width: "300px", margin: "20px" }} />

      </div>
      <div className="Seller-col2">
        <h1 className="Seller-col2-head">  SELLER REGISTRATION</h1>
        <form className='Seller-col2-form' onSubmit={handleSubmit}>
          <div className="Seller-input-row">
            <div className="Seller-input-half">
              <label className='seller-label' htmlFor="f-name">First Name</label>
=======
        <h1>Welcome to Creative Connects</h1>
        <p>Join a vibrant community where your expertise meets new opportunities. Share and grow your skills.</p>
        <button className="Sellerback" onClick={handleBack}>Back</button>
      </div>
      <div className="Seller-col2">
        <h1>Seller Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="Seller-input-row">
            <div className="Seller-input-half">
              <label htmlFor="f-name">First Name</label>
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
              <input
                type="text"
                id="f-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Seller-input-half">
              <label htmlFor="l-name">Last Name</label>
              <input
                type="text"
                id="l-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="Seller-input-row">
            <div className="Seller-input-half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Seller-input-half">
              <label htmlFor="phone">Phone Number</label>
<<<<<<< HEAD
              <PhoneInput className="Phoneinput"
=======
              <PhoneInput
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
                country="pk"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                enableSearch
<<<<<<< HEAD
                containerStyle={{ width: '200px' }}         // Full wrapper
                inputStyle={{
                  width: '240px',
                  padding: '10px 10px 10px 50px'
                }}
=======
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
              />
            </div>
          </div>

          <div className="Seller-input-row">
            <div className="Seller-input-half">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Seller-input-half">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label htmlFor="field-domain">Field Domain</label>
          <select
            id="field-domain"
            name="fieldDomain"
            value={formData.fieldDomain}
            onChange={handleChange}
            required
          >
            <option value="">Select a field domain</option>
            {fieldDomains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </select>

          <label htmlFor="skills">Select a Skill</label>
          <select
            id="skills"
            name="skills"
            value={formData.skillToAdd || ''}
            onChange={(e) => setFormData({ ...formData, skillToAdd: e.target.value })}
<<<<<<< HEAD

=======
            required
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
          >
            <option value="">Select a skill</option>
            {skills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddSkill}>Add Skill</button>
          <p>Selected Skills: {formData.skills.join(', ')}</p>

          <div className="button-row">
            <button type="submit" className="Seller-submit">Register</button>
            <button type="button" className="Seller-clear" onClick={handleClear}>
              <span className="clear-icon">×</span> Clear
            </button>
          </div>
        </form>
      </div>
<<<<<<< HEAD

=======
      
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      <div className="floating-circle"></div>
    </div>
  );
};

export default SellerRegistration;
