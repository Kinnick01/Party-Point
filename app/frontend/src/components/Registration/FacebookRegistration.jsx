import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const RegistrationPage = () => {
  const handleFacebookLogin = (response) => {
    if (response.accessToken) {
      // User is logged in and authorized
      console.log('User logged in and authorized:', response);
    } else {
      // User cancelled login or did not fully authorize
      console.log('User cancelled login or did not fully authorize.');
    }
  };

  return (
    <div>
     
      <FacebookLogin
        appId="621722279691639"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookLogin}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Register with Facebook</button>
        )}
      />
    </div>
  );
};

export default RegistrationPage;
