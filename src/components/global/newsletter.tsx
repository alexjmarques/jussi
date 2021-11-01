import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import "../../styles/global.scss";
import "../../styles/newsletter.scss";

export const Newsletter = () => {
  return (
    <Container fluid className="newsletter">
      <Container>
        <Row>
          <Col></Col>
          <Col md={7} className="newsCenter">
            <h1>Receba novidades da nossa área de produtos digitais.</h1>
            <Form className="newsForm">
              <Form.Group className="labelEnv">
                <Form.Control type="email" placeholder="Digite seu e-mail" />
                <Button>CADASTRAR</Button>
              </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
