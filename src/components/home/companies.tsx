import { Container, Row, Image, Col } from 'react-bootstrap';
import LogoBrastemp from "../../assets/logo-brastemp.png";
import LogoCompraCerta from "../../assets/logo-compra-certa.png";
import LogoConsul from "../../assets/logo-consul.png";
import LogoThebar from "../../assets/logo-thebar.png";

import "../../styles/global.scss";
import "../../styles/companies.scss";

export const Companies = () => {
  return (
    <Container fluid className="companies">
      <Container>
        <Row>
          <Col xs={4} className="LeftContent">
            <h4 className="grow0">Nossas principais lojas VTEX</h4>
            <span className="grow1 text-center">→</span>
          </Col>
          <Col xs={8} className="RightContent">
            <Image src={LogoBrastemp} alt="Logo Brastemp" />
            <Image src={LogoCompraCerta} alt="Logo Compra certa" />
            <Image src={LogoConsul} alt="Logo Consul" />
            <Image src={LogoThebar} alt="Logo Thebar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
