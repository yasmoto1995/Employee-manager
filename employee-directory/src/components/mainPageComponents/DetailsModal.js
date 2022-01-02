import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import "./DetailsModal.css";
import { useNavigate } from "react-router-dom";

const DetailsModal = (props) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const editHandler = function () {
    navigate("/edit", { state: props.data });
  };

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setShow(true)}>
        View Details
      </Button>

      <Modal
        className="modal-main"
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="modal-main--header">
          <Modal.Title id="example-custom-modal-styling-title">
            <img src={props.data.src} alt="profile-img" className="modal-img" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body poppins">
            <div className="info-div">
              <Container fluid>
                <Row>
                  <Col>
                    <h5>
                      First Name:
                      <span className="text-primary">
                        {props.data.firstName}
                      </span>
                    </h5>
                  </Col>
                  <Col>
                    <h5>
                      Last Name:
                      <span className="text-primary">
                        {props.data.lastName}
                      </span>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>
                      Email:
                      <span className="text-primary">
                        {" " + props.data.email}
                      </span>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>
                      Role:
                      <span className="text-primary"> {props.data.role}</span>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>
                      Contact Number:
                      <span className="text-primary">{props.data.contact}</span>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <h5>
                    Address:
                    <span className="text-primary">{props.data.address}</span>
                  </h5>
                </Row>
                <Row>
                  <Col>
                    <button className="btn btn-primary" onClick={editHandler}>
                      Edit Data
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DetailsModal;
