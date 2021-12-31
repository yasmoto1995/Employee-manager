import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import { Col, Container, Row } from "react-bootstrap";
import SortBar from "../components/SortBar";
import data from "../components/data";
import { useState } from "react";

const filteredData = function (type) {
  if (type === "Everyone") {
    return data.data;
  }

  return data.data.filter((el) => el.role === type);
};

const Main = () => {
  const [updatedData, setData] = useState(filteredData("Everyone"));
  // console.log(filteredData("Partner"));
  // console.log(filteredData("Manager"));
  // console.log(filteredData("Team"));

  return (
    <div className="main">
      <Navbar></Navbar>
      <Container>
        <SortBar nums={updatedData.length}></SortBar>
      </Container>
      <Container fluid>
        <Row>
          {updatedData.map((a) => (
            <Col key={a.id}>
              <Cards data={a}></Cards>
            </Col>
          ))}
        </Row>
      </Container>
      <button onClick={setData}>Team</button>
    </div>
  );
};

export default Main;
