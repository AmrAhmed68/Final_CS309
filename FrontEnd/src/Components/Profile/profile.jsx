import React from 'react';
import './ProfileComponent.css';
//  import SignUP from '../SignUP/SignUP';

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div className='profile-container'>
      <div className="profile-header">  <h1>Hi {userData[0]} !</h1></div>
      <div className="profile-details">     
      <p><strong>Email: {userData[1]}</strong> </p>
      <p><strong>PhoneNumber: {userData[2]}</strong></p>
      <p><strong>age: {userData[3]}</strong> </p>
      <p><strong>country: {userData[4]}</strong> </p>
    </div>
    </div>
  );
};
export default Profile; 
