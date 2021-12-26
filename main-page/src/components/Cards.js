import "./Cards.css";

const Cards = () => {
  return (
    <div className="Card poppins">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://i.postimg.cc/90mcVfBq/unsplash-m-EZ3-Po-FGs-k.jpg"
            className="image-card"
            alt="Person"
            width="130px"
            height="130px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h4 className="name text-primary">Kate Boisson</h4>
        <h5 className="role text-primary">Manager</h5>
      </div>
    </div>
  );
};

export default Cards;
