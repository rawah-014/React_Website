import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import user from "../assets/icons/user.png";
import { Link } from "react-router-dom";

import { ProgressBar } from "react-step-progress-bar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { newStepone, clearErrors } from "../redux/actions/steponeActions";
import { NEW_STEPONE_RESET  } from "../redux/constants/steponeConstants";

function StepOne({ history }) {

  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessTypeId, setBusinessTypeId] = useState("");
  const [cityId, setCityId] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([])

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(state => state.newStepone);

  useEffect(() => {

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/StepTwo');
          alert.success('Product created successfully');
          dispatch({ type: NEW_STEPONE_RESET })
      }

  }, [dispatch, alert, error, success, history])

  const submitHandler = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.set('name', name);
      formData.set('ownerName', ownerName);
      formData.set('phone', phone);
      formData.set('businessTypeId', businessTypeId);
      formData.set('cityId', cityId);

   

      images.forEach(image => {
          formData.append('images', image)
      })

      dispatch(newStepone(formData))
  }

  const onChange = e => {

      const files = Array.from(e.target.files)

      setImagesPreview([]);
      setImages([])

      files.forEach(file => {
          const reader = new FileReader();

          reader.onload = () => {
              if (reader.readyState === 2) {
                  setImagesPreview(oldArray => [...oldArray, reader.result])
                  setImages(oldArray => [...oldArray, reader.result])
              }
          }

          reader.readAsDataURL(file)
      })
  }

 

  return (
    <div>
      <Row>
        <div className="m-5 p-5"></div>
        <Row>

        </Row>
        <Row className=" text-center">
          <Container className="mt-5">
            <Row>
              <Col md={{ span: 3, offset: 4 }} className="w-50">
                <Row>
                  <Col md={1} className="">
                    <div className="">
                      <img src={user} className="icon-style p-3" alt="icon" />
                    </div>
                  </Col>
                  <Col md={4} className="text-start">
                    <h className="title-login">Sign up</h>
                    <p className="login-content  pt-3">
                      Start your 30-day free trial.
                    </p>
                  </Col>
                </Row>
                <Form className="text-start"  onSubmit={submitHandler} encType='multipart/form-data'>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Name</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="text"
                          onChange={(e) => setOwnerName(e.target.value)}
                          id="ownerName_field"
                          name="ownerName"
                          value={ownerName}
                          placeholder="Owner Name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Owner Name</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="email"
                          placeholder="Email"
                          defaultValue={"you@company.com"}
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Owner Name</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          id="name_field"
                          name="name"
                          value={name}
                          placeholder="Name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Phone</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="number"
                          onChange={(e) => setPhone(e.target.value)}
                          id="phone_field"
                          name="phone"
                          value={phone}
                          placeholder="Phone"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                {/*   <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Password
                        </Form.Label>
                        <Form.Control
                          className="login-input"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Reinter Password
                        </Form.Label>
                        <Form.Control
                          className="login-input"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Business Type
                        </Form.Label>
                        <Form.Select
                          aria-label="Business Type"
                          className="login-input"
                          id="businessTypeId_field"
                          name="businessTypeId"
                          required
                          onChange={(e) => setBusinessTypeId(e.target.value)}
                          value={businessTypeId}
                        >
                          <option>Business Type</option>
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
                          Location
                        </Form.Label>
                        <Row>
                          <Col md={6}>
                            <Form.Control
                              className="login-input"
                              type="text"
                              placeholder="Country"
                              defaultValue={"AEU"}
                            />
                          </Col>
                          <Col md={6}>
                          <Form.Select
                          aria-label="Business Type"
                          className="login-input"
                          id="cityId_field"
                          name="cityId"
                          required
                          onChange={(e) => setCityId(e.target.value)}
                          value={cityId}
                        >
                          <option>City</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                          </Col>
                        </Row>
                        <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                     
                      <Button
                        className="contact-button w-100 p-2"
                        type="submit"
                      >
                        <span className="contact-btn-text"> Sign in</span>
                      </Button>
                     
                    </Col>
                  </Row>
                  <Row className="text-center mt-4">
                    <Col md={8}>
                      <span className="login-content">
                        Already have an account?
                      </span>
                      <span className="forget">Login</span>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Row>
      </Row>
    </div>
  );
}

export default StepOne;
