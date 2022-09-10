import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import card from "../assets/icons/Frame 10(1).png";
import Breakfast from "../assets/icons/Text.png";
import EmptyCup from "../assets/icons/Group 26(1).png";
import qrCode from "../assets/icons/qr-code.png";
import check from"../assets/icons/dd.png"
import "./StepTwo.css"
import { Link } from "react-router-dom";

function StepThree() {
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
              <h className="title-login">Menu Configrations</h>
              <p className="login-content  pt-3">
                Augue risus ac sit parturient.
              </p>
            </Col>
          </Row>
           <Form className="text-start">
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
                      <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input type={type} />
                        <Form.Check.Label className="login-label">
                          Attachments
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
                 {/*  <Form.Label className="login-label">
                    Choose after what stamp he will win
                  </Form.Label> */}
                  <Form.Control
                    className="login-input"
                    type="text"
                    placeholder="reward"
                    defaultValue={'#882df1'}
                  />
                </Form.Group>
              </Col>
            </Row>
  

            <Row className="mt-4">
              <Col md={8}>
              <Link to={"/StepFour"}>
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
              <Container className="ps-4 pe-4">
              <Row className="">
                <div className=" ">
                <span className="step-header me-5">Evaro Resturant</span>
                    <img src={check} className='mt-4 ms-5 ps-4 text-end'/>    
                </div> 
               
              </Row>
              <Row>
                <div className=" step-content">
                <p className="step3-header">Hot Meals</p>
                </div>
              </Row>
              <Row className="">
                  <Col md={1}>
                  <img src={check} className=''/>
                  </Col>
                  <Col md={8} className='ms-5 pt-2'>
                    <p className="res-food">Burger</p>
                    <p className="res-food-des">Et massa non est amet phasellus.</p>
                  </Col>
                  <Col md={1}>
                  <p className="res-food">$30</p>
                  </Col>
              </Row>
              <Row className="">
                  <Col md={1}>
                  <img src={check} className=''/>
                  </Col>
                  <Col md={8} className='ms-5 pt-2'>
                    <p className="res-food">Burger</p>
                    <p className="res-food-des">Et massa non est amet phasellus.</p>
                  </Col>
                  <Col md={1}>
                  <p className="res-food">$30</p>
                  </Col>
              </Row>
              <Row className="">
                  <Col md={1}>
                  <img src={check} className=''/>
                  </Col>
                  <Col md={8} className='ms-5 pt-2'>
                    <p className="res-food">Burger</p>
                    <p className="res-food-des">Et massa non est amet phasellus.</p>
                  </Col>
                  <Col md={1}>
                  <p className="res-food">$30</p>
                  </Col>
              </Row>
              <Row>
                <div className=" step-content">
                <span className="step3-header">Breakfast</span><img src={Breakfast} />
                </div>
              </Row>
              <Row className="">
                  <Col md={1}>
                  <img src={check} className=''/>
                  </Col>
                  <Col md={8} className='ms-5 pt-2'>
                    <p className="res-food">Burger</p>
                    <p className="res-food-des">Et massa non est amet phasellus.</p>
                  </Col>
                  <Col md={1}>
                  <p className="res-food">$30</p>
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

export default StepThree;
