import "./Cards.css";
import DetailsModal from "./DetailsModal";

const Cards = (props) => {
  return (
    <div className="Card poppins">
      <div className="upper-container">
        <div className="image-container">
          <img
            src={props.data.src}
            className="image-card"
            alt="Person"
            width="130px"
            height="130px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h5 className="name text-primary">
          {`${props.data.firstName} ${props.data.lastName}`}
        </h5>
        <h5 className="role text-primary">{props.data.role}</h5>
        <DetailsModal data={props.data}></DetailsModal>
      </div>
    </div>
  );
};

export default Cards;
