import React from 'react';

export default function Profile() {
    const cardStyle = {
        borderRadius: '.5rem',
      };
    
      const gradientStyle = {
        // background: 'linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))',
      };
      const cookiecheck = document.cookie.split(';')
      const cookiedictionary = {}
      cookiecheck.forEach(element => {
        const key = element.split('=')[0].trim()
        const value = element.split('=')[1].trim()
        cookiedictionary[key] = value
      });
      const emailAdress = cookiedictionary.email;
      return (
        <section style={{ backgroundColor: '#f4f5f7' }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-7 mb-4 mb-lg-0">
                <div  style={cardStyle}>
                  <div className="row g-5">
                    <div className="col-md-4 gradient-custom text-center" style={Object.assign({}, cardStyle, gradientStyle)}>
                      <h5>nameofUser not set</h5>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-3" style={{ maxWidth: '100%', height: 'auto' }} />
                      <p>job not set</p>
                      <i className="far fa-edit mb-5"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>{emailAdress}</h6>
                            <p className="text-muted">info@example.com</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Phone</h6>
                            <p className="text-muted">123 456 789</p>
                          </div>
                        </div>
                        <h6>Projects</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Recent</h6>
                            <p className="text-muted">Lorem ipsum</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Most Viewed</h6>
                            <p className="text-muted">Dolor sit amet</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                          <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                          <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                        </div>
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
