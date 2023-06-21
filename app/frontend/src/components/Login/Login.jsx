import React, {useState} from 'react';
import GoogleLogin from './GoogleLogin';
import FacebookLoginButton from './LogInWithFacebook.jsx';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here, such as making an API request

        // Reset the form
        setUsername('');
        setPassword('');
    };

    return (
        <div className='loginHolder'>
            <div className='ppLoginDiv'>
            <form className='partyPointLoginForm' onSubmit={handleSubmit}>
                <div className='username'>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className='passsword'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className='submit' type="submit">Log In</button>
                
            </form>
            </div>
            <div className='googleLogin'><GoogleLogin/></div>
           <div className='facebookLogin'> <FacebookLoginButton/></div>
           <div className='homeButton'>
             <Link to="/">
          <button>Home</button>
        </Link>
        </div>

        </div>
    );
};
export default Login;