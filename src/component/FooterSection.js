import Container from "react-bootstrap/Container";
import "./FooterSection.css";
import { Col, Row } from "react-bootstrap";
import face from "../assets/icons/facebook.png";
import tweet from "../assets/icons/tweeter.png";
import g from "../assets/icons/ghost.png";
import link from "../assets/icons/linkedin.png";
import inst from "../assets/icons/instgram.png";
import logo from "../assets/icons/footer.png";

/* var sectionStyle = {
  backgroundImage: `url(${loyal}) , no-repeat , cover`
} */

function FooterSection() {
  return (
    <>
      <div className="footer-section m-0">
        <Row className="text-center w-100 p-5">
          <Col md={3}>
            <img src={logo} />
          </Col>
          <Col md={6}>
            <img src={face} className="" />

            <img src={tweet} className="ms-3" />

            <img src={link} className="ms-3" />

            <img src={inst} className="ms-3" />

            <img src={g} className="ms-3" />
          </Col>
          <Col md={3}>
            <p className="footer-content">© 2022 Loyagrow</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FooterSection;
