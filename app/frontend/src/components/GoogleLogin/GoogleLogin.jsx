import React from "react";

class GoogleLogin extends React.Component {
  componentDidMount() {
    // Load the Google API script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = this.initGoogleSignIn;
    document.body.appendChild(script);
  }

  initGoogleSignIn = () => {
    // Initialize Google Sign-In
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
      });
    });
  };

  handleSignIn = () => {
    // Trigger Google Sign-In
    window.gapi.auth2.getAuthInstance().signIn().then(googleUser => {
      const idToken = googleUser.getAuthResponse().id_token;
      // Send the ID token to your server for verification or other operations
      console.log('Google ID token:', idToken);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSignIn}>Sign in with Google</button>
      </div>
    );
  }
}

export default GoogleLogin;