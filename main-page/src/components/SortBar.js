import { Dropdown, Pagination } from "react-bootstrap";
import "./SortBar.css";

const SortBar = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  console.log(items);

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
            <Dropdown.Item href="#/action-1">Manager</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Partners</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Team</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SortBar;
