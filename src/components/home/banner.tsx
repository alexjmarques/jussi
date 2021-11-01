
import BannerImg from "../../assets/Banner.png";
import { Container, Col, Image, Row } from 'react-bootstrap';

import "../../styles/global.scss";
import "../../styles/banner.scss";

export const Banner = () => {
  return (
    <Container fluid className="banner">
      <Container>
        <Row>
          <Col xs={5} className="title">
            <h1>Criamos lojas que vendem mais.</h1>
            <p>
              A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
              Precisa criar sua loja ou migrar de plataforma?
            </p>
            <button>Veja nossas soluções</button>
          </Col>
          <Col xs={7}>
            <Image src={BannerImg} alt="Products" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
