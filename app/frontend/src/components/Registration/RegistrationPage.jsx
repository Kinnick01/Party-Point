import React, { useState } from "react";
import GoogleRegistration from "./GoogleRegistration";
import FacebookRegistrationButton from "./FacebookRegistration";
const RegistrationPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or perform client-side validation
    fetch('/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "email": email,
        "genreSet": genre,
        "password": password
      })
    })
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log(data);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });


    console.log("Form submitted!");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Genres:", genre);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <label for="cars">Choose your favorite genres:</label>

        <select name="genres" id="genres" multiple>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="techno">Techno</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <div className="registerWithGoogle">
        <GoogleRegistration />
      </div>
      <div>
        <FacebookRegistrationButton />
      </div>
    </div>
  );
};

export default RegistrationPage;
