import Container from "react-bootstrap/Container";
import "./GetInTouchSection.css";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/* var sectionStyle = {
  backgroundImage: `url(${loyal}) , no-repeat , cover`
} */

function GetInTouchSection() {
  return (
    <>
      <Row className="contact-section text-center">
        <Container>
          <h className="title">Get In Touch</h>
          <p className="contact-content w-100">
            We’d love to hear from you. Please fill out this form.
          </p>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="w-75">
              <Form className="text-start">
                <Row>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="contact-label">
                        First Name
                      </Form.Label>
                      <Form.Control
                        className="contact-input"
                        type="text"
                        placeholder="First Name "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="contact-label">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        className="contact-input"
                        type="text"
                        placeholder="Last Name "
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={8}>
                    <Form.Group>
                      <Form.Label className="contact-label">Email</Form.Label>
                      <Form.Control
                        className="contact-input"
                        type="text"
                        placeholder="Email"
                        defaultValue={"you@company.com"}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={8}>
                    <Form.Group>
                      <Form.Label className="contact-label">Message</Form.Label>
                      <Form.Control
                        className="contact-input"
                        as="textarea"
                        rows={4}
                        placeholder="Leave us a message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={8}>
                    <Button className="contact-button w-100 p-2" type="submit">
                      <span className="contact-btn-text"> Submit</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default GetInTouchSection;
