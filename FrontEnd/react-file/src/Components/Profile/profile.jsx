import React from 'react';
import './ProfileComponent.css';
//  import SignUP from '../SignUP/SignUP';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="profile-header">  <h1>Hi !</h1></div>
      <div className="profile-details">
      <p><strong>First Name:</strong></p>
      <p><strong>Last Name:</strong> </p>
      <p><strong>email:</strong> </p>
    </div>
    </div>
  );
};

export default Profile; 