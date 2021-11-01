import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import ImageJussi from "../../assets/image-jussi.png";

import "../../styles/global.scss";
import "../../styles/about.scss";


export const About = () => {
  return (
    <Container fluid className="about" id="quem-somos">
      <Container>
        <Row>
          <Col xs={4} className="aboutText">
            <h1>Olá, somos A Jüssi</h1>
            <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
            <Button> Conheça a Jüssi </Button>
          </Col>
          <Col xs={8}>
            <Image src={ImageJussi} alt="Somos a Jüssi" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
