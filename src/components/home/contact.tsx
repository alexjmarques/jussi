import { Container, Row, Col } from 'react-bootstrap';

import "../../styles/global.scss";
import "../../styles/contact.scss";

export const Contact = () => {
  return (
    <Container fluid className="contact">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={8} className="contCenter">
            <h1>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h1>
            <p>Entre em contato</p>
            <h3>comercial@jussi.com.br</h3>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

