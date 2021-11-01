import { Row, Container, Button, Card, Col } from 'react-bootstrap';

import "../../styles/global.scss";
import "../../styles/solutions.scss";

import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";

export const Solutions = () => {
  return (
    <Container fluid className="solutions" id="solutions">
      <Container>
        <Row>
          <h1 className="title"><span>//</span> Nossas soluções</h1>
          <Container fluid className="cardProducts">


            <Card className="item">
              <Card.Body>
                <Col className="img">
                  <Card.Img variant="top" src={s1} />
                </Col>
                <Card.Title>Nome do Produto #1</Card.Title>
                <Card.Text>
                  <p>Descrição do produto #1</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Ver solução</Button>
              </Card.Body>
            </Card>

            <Card className="item">
              <Card.Body>
                <Col className="img">

                  <Card.Img variant="top" src={s2} />
                </Col>
                <Card.Title>Nome do Produto #1</Card.Title>
                <Card.Text>
                  <p>Descrição do produto #1</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Ver solução</Button>
              </Card.Body>
            </Card>

            <Card className="item">
              <Card.Body>
                <Col className="img">
                  <Card.Img variant="top" src={s3} />
                </Col>
                <Card.Title>Nome do Produto #1</Card.Title>
                <Card.Text>
                  <p>Descrição do produto #1</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Ver solução</Button>
              </Card.Body>
            </Card>

            <Card className="item">
              <Card.Body>
                <Col className="img">
                  <Card.Img variant="top" src={s4} />
                </Col>
                <Card.Title>Nome do Produto #1</Card.Title>
                <Card.Text>
                  <p>Descrição do produto #1</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Ver solução</Button>
              </Card.Body>
            </Card>

          </Container>
        </Row>
      </Container>
    </Container>
  );
}
