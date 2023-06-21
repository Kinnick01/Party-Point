import React, { useEffect } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const FacebookLoginButton = () => {
  const responseFacebook = (response) => {
    // Process the response object returned by Facebook login
    console.log(response);
  };

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=YOUR_APP_ID&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div>
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </div>
    //<div><button>Log in with facebook</button></div>
  );
};

export default FacebookLoginButton;
