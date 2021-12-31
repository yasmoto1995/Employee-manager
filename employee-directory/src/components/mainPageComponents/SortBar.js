import { Dropdown, Pagination } from "react-bootstrap";
import "./SortBar.css";

const SortBar = (props) => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= Math.ceil(props.nums / 12); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  console.log(props);

  return (
    <div className="main-container">
      <div className="pagination-container">
        <Pagination>{items}</Pagination>
      </div>
      <div className="sort-container">
        <Dropdown>
          <Dropdown.Toggle className="dropdown-button" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Everyone</Dropdown.Item>
            <Dropdown.Item>Manager</Dropdown.Item>
            <Dropdown.Item>Partners</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SortBar;
