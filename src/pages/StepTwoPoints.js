import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import card from "../assets/icons/Frame 10.png";
import fullCup from "../assets/icons/Group 26.png";
import EmptyCup from "../assets/icons/Group 26(1).png";
import qrCode from "../assets/icons/qr-code.png";
import check from"../assets/icons/Frame 13.png"
import "./StepTwo.css"
import { Link } from "react-router-dom";

function StepTwoPoints() {
  return (
    <div>
      <Row className="mt-5">
        <Col md={2}></Col>
        <Col md={4} className="text-center">
          <Row>
            <Col md={1} className="">
              <div className="">
                <img src={card} alt="icon" />
              </div>
            </Col>
            <Col md={8} className="ms-4">
              <h className="title-login">Loyalty Cart</h>
              <p className="login-content  pt-3">
                Augue risus ac sit parturient.
              </p>
            </Col>
          </Row>
           <Form className="text-start">
              <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">Brand Name</Form.Label>
                  <Form.Control
                    className="login-input"
                    type="text"
                    placeholder="Brand Name"
                    defaultValue={"Evaro Resturant"}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">Brand Logo</Form.Label>
                  <Form.Control
                    className="login-input"
                    type="text"
                    placeholder="Brand Name"
                    defaultValue={"Evaro Resturant"}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">
                    Background Type
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={type} className="mb-3">
                      <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input type={type}  />
                        <Form.Check.Label className="login-label">
                          Color
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input type={type}  />
                        <Form.Check.Label className="login-label">
                          Templates
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  ))}
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">
                    Reward Pattern
                  </Form.Label>
                  <Form.Select
                    aria-label="Business Type"
                    className="login-input"
                  >
                    <option>Stamp</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">
                    Choose after what stamp he will win
                  </Form.Label>
                  <Form.Control
                    className="login-input"
                    type="text"
                    placeholder="reward"
                    defaultValue={4}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">Stamp Style</Form.Label>
                  <Form.Select
                    aria-label="Business Type"
                    className="login-input"
                  >
                    <option>Choose stamp style</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={8}>
                <Form.Group>
                  <Form.Label className="login-label">Code Style</Form.Label>
                  <Form.Select
                    aria-label="Business Type"
                    className="login-input"
                  >
                    <option>QR Code</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={8}>
              <Link to={"/StepThree"}>
                <Button className="contact-button w-100 p-2" type="submit">
                  <span className="contact-btn-text"> Next</span>
                </Button>
                </Link>
              </Col>
            </Row> 
          </Form> 
        </Col>

        <Col md={3}>
          <div className="cup-section">
            <Row>
              <Container className="ps-5 pe-5">
              <Row className="">
                <div className=" ">
                    <img src={check} className='mt-4'/>
                    <span className="step-header me-5">Evaro Coffee</span>
                </div>
                
                
               
              </Row>
              <Row>
                <div className=" step-content">
                <p className="step-content">Jesse Prehodick</p>
                </div>
              </Row>
              <Row className="m-3">
                   <div>
                   <span className="points text-start me-5 pe-5">Points</span>
                    
                    
                    <span className="points text-end ms-5 ps-5">0</span>
                   </div>
                     
                    
              </Row>
              <Row className="mt-5 mb-5">
                <Col md={{ span: 6, offset: 3 }}>
                  <img src={qrCode} />
                </Col>
              </Row>
              </Container>
              
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StepTwoPoints;
