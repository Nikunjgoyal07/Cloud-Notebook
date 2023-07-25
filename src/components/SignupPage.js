import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function SignupPage() {
  const [yourName, setNoteName] = useState('');
  const [yourEmail, setyourEmail] = useState('');
  const [yourPassword, setyourPassword] = useState('');
  const [yourPassword2, setyourPassword2] = useState('');
  async function handleRegisterFx() {
    if (yourPassword !== yourPassword2) {
      alert("Passwords do not match");
    } else {
      try {
        const encodedName = encodeURIComponent(yourName);
        const encodedEmail = encodeURIComponent(yourEmail);
        const encodedPassword = encodeURIComponent(yourPassword);
        const response = await fetch(
          `https://noteapibackend.onrender.com/api/signup?name=${encodedName}&email=${encodedEmail}&password=${encodedPassword}`
        );
  
        if (!response.ok) {
          throw new Error('Failed to send data to backend');
        }
        console.log(response);
  
        const responseData = await response.text();
  
        if (responseData === "Email already exists") {
          alert("Email already exists");
        } else if (responseData === "User signed up") {
          alert("User signed up");
          history.push('../');
        }
      } catch (error) {
        console.error('Error sending data to backend:', error);
        // Handle the error and show appropriate feedback to the user.
      } finally {
        // Reset the form
        setyourName('');
        setyourEmail('');
        setyourPassword('');
        setyourPassword2('');
      }
    }
  }
  
  function handleyourPassword2change(event) {
    setyourPassword2(event.target.value);
  }
  function handleyourPasswordchange(event) {
    setyourPassword(event.target.value);
  }
  function handleyourNamechange(event) {
    setNoteName(event.target.value);
  }
  function handleyourEmailchange(event) {
    setyourEmail(event.target.value);
  }
  return (
<section className=" d-flex justify-content-center align-items-center" style={{ backgroundColor: '#eee' }}>
  <div class="container ">
    <div class="row d-flex justify-content-center align-items-center  ">
      <div class="col-lg-12 col-xl-11">
        <div class="text-black" style={{borderradius: "25px" , backgroundColor:"#eee"}} >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" value={yourName} onChange={handleyourNamechange} class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" value={yourEmail} onChange={handleyourEmailchange} class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" value={yourPassword} onChange={handleyourPasswordchange} class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <input type="password" id="form3Example4cd" value={yourPassword2} onChange={handleyourPassword2change} class="form-control" />
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={handleRegisterFx}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="signupImage.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}