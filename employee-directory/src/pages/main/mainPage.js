import "./mainPage.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SortBar from "../../components/mainPageComponents/SortBar";
import data from "../../components/mainPageComponents/data";
import Cards from "../../components/mainPageComponents/Cards";
//new

const Main = () => {
  const filteredData = (type) => {
    const info =
      type === "Everyone"
        ? data.data
        : data.data.filter((el) => el.role === type);

    return info;
  };

  const [updatedData, setData] = useState([]);
  console.log(updatedData);
  const paginationHandlers = (range) => {
    setData(updatedData.slice(range[0], range[1]));
  };

  const searchHandler = (upD) => {
    setData(upD);
  };

  const sortHandlers = (event) => {
    setData(filteredData(`${event.target.innerText}`));
  };

  const baseUrl = "http://localhost:7000/getAllData";

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
      });

      const newData = await response.json();
      setData(newData.result);
    }

    getData();
  }, []);
  return (
    <div className="main">
      <Container>
        <SortBar
          nums={updatedData.length}
          sortFnc={sortHandlers}
          pagFnc={paginationHandlers}
          searchFnc={searchHandler}
          data={data}
        ></SortBar>
      </Container>
      <Container fluid>
        <Row className="card-container">
          {updatedData.map((a) => (
            <Col key={a._id} className="cards">
              <Cards data={a}></Cards>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
