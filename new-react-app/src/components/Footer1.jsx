import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer1 = () => {
  return (
    <div id="ContantUs" className="mt-5">
      {/* Footer Section */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            {/* Solutions Column */}
            <div className="col-md-2">
              <h6>SOLUTIONS</h6>
              <ul className="list-unstyled">
                <li>Travel</li>
                <li>Booking</li>
                <li>Flights</li>
                <li>Cruises</li>
                <li>Ground</li>
              </ul>
            </div>
            {/* Support Column */}
            <div className="col-md-2">
              <h6>SUPPORT</h6>
              <ul className="list-unstyled">
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Tours</li>
                <li>Refunds</li>
              </ul>
            </div>
            {/* Company Column */}
            <div className="col-md-2">
              <h6>COMPANY</h6>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Partners</li>
              </ul>
            </div>
            {/* Legal Column */}
            <div className="col-md-2">
              <h6>LEGAL</h6>
              <ul className="list-unstyled">
                <li>Claims</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Policies</li>
                <li>Conditions</li>
              </ul>
            </div>
            {/* Newsletter Column */}
            <div className="col-md-4">
              <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
              <p>The latest deals, articles, and resources, sent to your inbox weekly.</p>
              <Form>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="me-2"
                  />
                  <Button variant="primary">Subscribe</Button>
                </Form.Group>
              </Form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-4 text-center">
            <p>2022 Experiences, LLC. All rights reserved</p>
            <div>
              <i className="fab fa-facebook mx-2"></i>
              <i className="fab fa-instagram mx-2"></i>
              <i className="fab fa-twitter mx-2"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;
