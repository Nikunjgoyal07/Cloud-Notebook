import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const [userExists, setUserExists] = useState(false);
  
  useEffect(() => {
    if (document.cookie) {
      const cookiecheck = document.cookie.split(';');
      const cookiedictionary = {};
      cookiecheck.forEach(element => {
        const key = element.split('=')[0].trim();
        const value = element.split('=')[1].trim();
        cookiedictionary[key] = value;
      });
      const emailAdress = cookiedictionary.email;
      const password = cookiedictionary.password;
      console.log(cookiedictionary);

      const checkwithbackend = async () => {
        try {
          // fetch(`https://noteapibackend.onrender.com/api/signin?email=${emailAdress}&password=${password}`)
          const response = await fetch(`https://noteapibackend.onrender.com/api/signin?email=${emailAdress}&password=${password}`);
          const data = await response.json();
          console.log(data);
          console.log(typeof data);
          if (!data) {
            alert("User not signed in");
            navigate('../signin');
          } else {
            setUserExists(true);
          }
        } catch (error) {
          console.error('Error sending data to backend:', error);
          // Handle the error and show appropriate feedback to the user.
        }
      };

      checkwithbackend();
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Cloud NoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/Newnote">Write a Note</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/notes">Notes</Link>
            </li>
          </ul>
          {userExists ? (
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/signout">Sign Out</Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/signup">Sign up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
