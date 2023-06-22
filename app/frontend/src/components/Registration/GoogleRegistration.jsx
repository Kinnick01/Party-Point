import React from 'react';

const RegistrationPage = () => {
  const handleGoogleRegistration = () => {
    // Redirect the user to the Google OAuth 2.0 login page
    // Replace the `YOUR_CLIENT_ID` placeholder with your actual Google API client ID
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=1046386489846-sq86ihtdn7b3vl2iv06k566t8k9bps4a.apps.googleusercontent.com&redirect_uri=${window.location.origin}/oauth2callback&response_type=code&scope=email%20profile&prompt=select_account`;
  };

  return (
    <div>
      
      <button onClick={handleGoogleRegistration}>Register with Google</button>
    </div>
  );
};

export default RegistrationPage;
