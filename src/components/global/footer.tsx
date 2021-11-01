
import { Container, Col, Row, Image } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "../../styles/global.scss";
import "../../styles/footer.scss";

import WppLogo from "../../assets/wppLogo.png";

export const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row>
          <Col>
            <Image src={WppLogo} alt="Logo wppcompany"></Image>
          </Col>
          <Col>
            <ul className="socialFooter">
              <li><FaFacebookF /></li>
              <li><FaInstagram /></li>
              <li><FaLinkedinIn /></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
