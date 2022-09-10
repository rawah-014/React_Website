import { Container, Row } from "react-bootstrap";
import FeaturesSection from "./component/FeaturesSection";
import FooterSection from "./component/FooterSection";
import GetInTouchSection from "./component/GetInTouchSection";
import HowSection from "./component/HowSection";
import InfoSection from "./component/InfoSection";
import LoyalSection from "./component/LoyaSection";
import NavBar from "./component/NavBar";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <NavBar />
        </Row>
        <div className="m-5 p-4"></div>
        <LoyalSection />
        <FeaturesSection />
        <HowSection />
        <GetInTouchSection />
        <div className="m-5 p-4"></div>
        <InfoSection />
      </Container>
      <FooterSection />
    </div>
  );
}

export default Home;
