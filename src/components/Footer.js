import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-secondary">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-secondary">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-secondary">
              <i className="bi bi-google"></i>
            </a>
            <a href="" className="me-4 text-secondary">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" className="me-4 text-secondary">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="" className="me-4 text-secondary">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>
        
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="bi bi-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="bi bi-house-door me-3 text-secondary"></i> New York, NY 10012, US</p>
                <p>
                  <i className="bi bi-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p><i className="bi bi-telephone me-3 text-secondary"></i> + 01 234 567 88</p>
                <p><i className="bi bi-printer me-3 text-secondary"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
          © 2021 Company name. All rights reserved.
          <a className="text-reset fw-bold" href="https://example.com/">example.com</a>
        </div>
      </footer>
    </>
  );
}
