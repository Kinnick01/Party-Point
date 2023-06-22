import React from 'react';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  // Replace the following with actual data from your app's state or API
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'I love coding and building cool web apps!',
    avatar: 'https://example.com/avatar.jpg',
  };

  return (
    <div className="profile-page">
         <Link to="/">
            <button> Home</button>
          </Link>
      <img src={user.avatar} alt="Profile Avatar" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      {/* Add more profile information and components as needed */}
    </div>
  );
};

export default ProfilePage;
