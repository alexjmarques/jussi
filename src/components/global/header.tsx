import { FiShoppingCart, FiSearch } from "react-icons/fi";
import LogoJussi from "../../assets/jussiLogo.svg";
import { Container, Row, Col, Image, Button, Nav, Form } from 'react-bootstrap';

import "../../styles/global.scss";
import "../../styles/header.scss";

import { Search } from './search';

export const Header = () => {
  return (
    <Container fluid className="header">
      <Row>
        <Col md={8} className="LeftContent">
          <Nav activeKey="/" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Nav.Link href="/" className="logo"><Image src={LogoJussi} alt="" /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="link">Nossas soluções</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="link">Conheça a Jussi</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={4} className="RightContent">
          <Nav activeKey="/" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Search />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="link">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="icon"><FiShoppingCart /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
