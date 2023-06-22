import React from 'react';
import GoogleLogin from 'react-google-login';




const GoogleOAuth2 = () => {
  const responseGoogle = (response) => {
    // Handle the Google OAuth2 response
    console.log(response);
  };


  return (
    <div>
      
      <GoogleLogin
        clientId="1046386489846-sq86ihtdn7b3vl2iv06k566t8k9bps4a.apps.googleusercontent.com"
        redirectUri='http://localhost:3000/'
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleOAuth2;
