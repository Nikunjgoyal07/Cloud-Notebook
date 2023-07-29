import React, { useState } from 'react'
import LoadingModal from './LoadingModal';
import { useNavigate } from 'react-router-dom'

const backgroundRadialGradientStyle = {
    backgroundColor: 'hsl(218, 41%, 15%)',
    backgroundImage: 'radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%)'
};

const radiusShape1Style = {
    height: '220px',
    width: '220px',
    top: '-60px',
    left: '-130px',
    background: 'radial-gradient(#44006b, #ad1fff)',
    overflow: 'hidden'
};

const radiusShape2Style = {
    borderRadius: '38% 62% 63% 37% / 70% 33% 67% 30%',
    bottom: '-60px',
    right: '-110px',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(#44006b, #ad1fff)',
    overflow: 'hidden'
};

const bgGlassStyle = {
    backgroundColor: 'hsla(0, 0%, 100%, 0.9)',
    backdropFilter: 'saturate(200%) blur(25px)'
};

export default function SignIn() {

    const navigate = useNavigate();
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const loadingModal = loading ? <LoadingModal /> : null;
    const handleemailchange = (event) => {
        setEmailAdress(event.target.value);
    }
    const handlepasswordchange = (event) => {
        setPassword(event.target.value);
    }
    const checkwithbackend = async () => {
        try {
            setLoading(true);
            // fetch(`https://noteapibackend.onrender.com/api/signin?email=${emailAdress}&password=${password}`)
            const response = await fetch(`https://noteapibackend.onrender.com/api/signin?email=${emailAdress}&password=${password}`)
            const data = await response.json();
            console.log(data);
            console.log(typeof (data));
            if (!data) {
                alert("Invalid credentials");
                setLoading(false);
            }
            else {
                alert("User signed in");
                document.cookie = "loggedIn=true";
                document.cookie = `email=${emailAdress}`;
                document.cookie = `password=${password}`;
                setLoading(false);
                navigate('../');
                window.location.reload();
            }
        }
        catch (error) {
            console.error('Error sending data to backend:', error);
            // Handle the error and show appropriate feedback to the user.
        }

    }



    return (
        <section style={backgroundRadialGradientStyle} className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: '#FFFFFF' }}>
                            The best offer <br />
                            <span style={{ color: '#FFFFFF' }}>for your business</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{ color: '#D4D4D4' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Temporibus, expedita iusto veniam atque, magni tempora mollitia
                            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                            ab ipsum nisi dolorem modi. Quos?
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" style={radiusShape1Style} className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" style={radiusShape2Style} className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-glass" style={bgGlassStyle}>
                            <div className="card-body px-4 py-5 px-md-5">
                                <form>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" className="form-control" value={emailAdress} onChange={handleemailchange} />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" className="form-control" value={password} onChange={handlepasswordchange} />
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                        <label className="form-check-label" htmlFor="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={checkwithbackend}>
                                        Sign in
                                    </button>

                                    <div className="text-center">
                                        <p>or sign in with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="bi bi-facebook"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="bi bi-google"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="bi bi-twitter"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="bi bi-github"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loadingModal}
        </section>
    );
};

