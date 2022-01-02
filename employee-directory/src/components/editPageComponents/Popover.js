import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import "./Popover.css";

const Example = (props) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Select Profile Picture</Popover.Header>
      <Popover.Body>
        <img
          src="https://i.postimg.cc/3RDbYzb5/avatar1.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/0jRXQZL6/avatar2.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/VvqGbn8K/avatar3.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/h4T3wWdV/avatar4.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/wjTf71bk/avatar5.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/sDJHjYKX/avatar6.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/BQ3wfYTk/avatar7.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
        <img
          src="https://i.postimg.cc/rpDfNvT0/avatar8.jpg"
          alt="avatar"
          className="avatar-img"
          onClick={props.fnc}
        />
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="primary" className="btn-editProfile">
        ✒️
      </Button>
    </OverlayTrigger>
  );
};

export default Example;
