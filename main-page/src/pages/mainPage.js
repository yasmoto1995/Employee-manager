import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import { Col, Container, Row } from "react-bootstrap";
import SortBar from "../components/SortBar";

const Main = () => {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Container>
        <SortBar></SortBar>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
