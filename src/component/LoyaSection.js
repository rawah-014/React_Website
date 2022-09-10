import Container from "react-bootstrap/Container";
import "./LoyalSection.css";
import section from "../assets/Untitled-1.png";
import { Col, Row } from "react-bootstrap";
import loyal from "../assets/Untitled-1.png";

/* var sectionStyle = {
  backgroundImage: `url(${loyal}) , no-repeat , cover`
} */

function LoyalSection() {
  return (
    <>
      <Row className="mb-0">
        <Col>
          <img src={loyal} alt="logo" className="loyal" />
         
        </Col>
      </Row>
    </>
  );
}

export default LoyalSection;
