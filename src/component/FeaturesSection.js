import "./FeaturesSection.css";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../assets/icons/1.png";
import icon2 from "../assets/icons/Icon.png";
import icon3 from "../assets/icons/Icon(1).png";

function FeaturesSection() {
  return (
    <>
      <Container>
        <Row className="features p-5 me-5">
          <Col md={4} className="mb-5">
            <div className="f">
              <span className="small-header">Features</span>
              <p className="big-header">Features</p>
              <p className="content ">
                A system that helps you create loyalty cards and manage customer
                relationships easily
              </p>
            </div>
          </Col>
          <Col md={4} className="pink-section">
            <div className="">
              <img src={icon} className="icon-style p-3" alt="icon" />
            </div>

            <p className="medium-header mt-5">No traditional cards</p>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              accumsan vulputate
            </p>
          </Col>
          <Col md={1} className="pink-section ms-4">
            <div className="">
              <img src={icon2} className="icon-style p-3" alt="icon" />
            </div>
            <p className="medium-header mt-5 rotate">No traditional cards</p>
            <div className=""></div>
          </Col>
          <Col md={1} className="pink-section ms-4">
            <div className="">
              <img src={icon3} className="icon-style p-3" alt="icon" />
            </div>
            <div className="">
              <p className="medium-header mt-5 rotate">Push notifications</p>
            </div>
          </Col>
          <Col md={1} className="pink-section ms-4">
            <div className="">
              <img src={icon3} className="icon-style p-3" alt="icon" />
            </div>
            <div className="">
              <p className="medium-header mt-5 rotate">Push notifications</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FeaturesSection;
