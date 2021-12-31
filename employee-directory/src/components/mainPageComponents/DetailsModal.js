import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import "./DetailsModal.css";

const DetailsModal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setShow(true)}>
        View Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {`${props.data.firstName} ${props.data.lastName}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body poppins">
            <img src={props.data.src} alt="profile-img" className="modal-img" />
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
                      <span className="text-primary">{props.data.email}</span>
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
                      <span className="text-primary">
                        {props.data.contactNumber}
                      </span>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <h5>
                    Address:
                    <span className="text-primary">{props.data.address}</span>
                  </h5>
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
