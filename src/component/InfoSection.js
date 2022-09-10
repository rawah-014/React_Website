import Container from 'react-bootstrap/Container';
import './InfoSection.css'
import { Col, Row } from 'react-bootstrap';
import email from'../assets/icons/email.png';
import phone from'../assets/icons/phone.png';
import world from'../assets/icons/world.png';

/* var sectionStyle = {
  backgroundImage: `url(${loyal}) , no-repeat , cover`
} */

function InfoSection() {
  return (
      <>
          <Row className='info-section text-center'>
            <Col md={3}>
                <div className='m-4'>
                    <img src={email} />
                </div>
                <h className='info-header '>Email</h>
                <p className='info-content mt-2'>Our friendly team is here to help.</p>
                <span className='info-contact mt-5'>hi@loyagrow.com</span>
            </Col>
            <Col md={4}>
                <div className='m-4'>
                    <img src={world} />
                </div>
                <h className='info-header '>Officel</h>
                <p className='info-content mt-2'>Come say hello at our office HQ.</p>
                <span className='info-contact mt-5'>100 Smith Street</span><br></br>
                <span className='info-contact mt-5'>Collingwood VIC 3066 AU</span>
            </Col>
            <Col md={3}>
                <div className='m-4'>
                    <img src={email} />
                </div>
                <h className='info-header '>Phone</h>
                <p className='info-content mt-2'>Mon-Fri from 8am to 5pm.</p>
                <span className='info-contact mt-5'>+1 (555) 000-0000</span>
            </Col>
          </Row>
        
          </>
     
  );
}

export default InfoSection;