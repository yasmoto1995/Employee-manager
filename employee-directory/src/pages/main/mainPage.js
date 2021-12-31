import "./mainPage.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SortBar from "../../components/mainPageComponents/SortBar";
import data from "../../components/mainPageComponents/data";
import Cards from "../../components/mainPageComponents/Cards";
import Navbar from "../../components/mainPageComponents/Navbar";

const filteredData = function (type) {
  if (type === "Everyone") {
    return data.data;
  }

  return data.data.filter((el) => el.role === type);
};

const Main = () => {
  const [updatedData, setData] = useState(filteredData("Manager"));
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
    </div>
  );
};

export default Main;
