import React, { useState } from 'react';
import './Registration.css';
import axios from 'axios';
const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [image, setImage] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  console.log(image
    );

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:3030/api/register`,
  //       {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         mobile,
  //         gender,
  //         dateOfBirth,
  //         image,
  //       },
  //       {
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );
  //     // Registration successful, handle response if needed
  //     console.log(response.data);
  //     // Reset form fields
  //     setFirstName('');
  //     setLastName('');
  //     setEmail('');
  //     setPassword('');
  //     setPhoneNumber('');
  //     setGender('');
  //     setDateOfBirth('');
  //     setImage(null);
      
  //   } catch (error) {
  //     // Handle error if registration fails
  //     console.error(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('mobile', mobile);
      formData.append('gender', gender);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('image', image);
  
      const response = await axios.post(
        'http://localhost:3030/api/register',
        formData,
        {
          headers: {  
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log(response.data);
  
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setMobile('');
      setGender('');
      setDateOfBirth('');
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="registration-page">
      <div className="registration ">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Phone Number:</label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={handleGenderChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Profile Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
