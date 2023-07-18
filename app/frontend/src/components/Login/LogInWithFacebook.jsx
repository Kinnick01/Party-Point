import React, { useEffect } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import "./LogInWithFacebook.css"

class FacebookLoginButton extends React.Component {
  responseFacebook = (response) => {
    // Handle the Facebook login response
    console.log(response);
  };

  render() {
    return (
      <div>
        <FacebookLogin
          appId="621722279691639"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          className="facebook-login-button"
          icon="fa-facebook"
          textButton="Login with Facebook"
        />
      </div>
    );
  }
}

export default FacebookLoginButton;
