import { FiShoppingCart, FiSearch } from "react-icons/fi";
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
              <AnchorLink href='#solutions' className="link nav-link">Nossas soluções</AnchorLink>
            </Nav.Item>
            <Nav.Item>
              <AnchorLink href='#about' className="link nav-link">Conheça a Jussi</AnchorLink>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={4} className="RightContent">
          <Nav activeKey="/" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Search />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="icon"><FiShoppingCart /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
