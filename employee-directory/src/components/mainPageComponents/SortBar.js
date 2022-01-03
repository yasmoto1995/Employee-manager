import { Dropdown, Pagination } from "react-bootstrap";
import { useState } from "react";
import "./SortBar.css";
import SearchBar from "./SearchBar";

const SortBar = (props) => {
  const [active, setActive] = useState(1);

  const fncBtn = (event) => {
    const num = +event.target.innerText[0];
    const start = (num - 1) * 12;
    const end = num * 12;

    setActive(num);
    props.pagFnc([start, end]);
  };

  let items = [];
  for (let numbers = 1; numbers <= Math.ceil(props.nums / 12); numbers++) {
    items.push(
      <Pagination.Item
        key={numbers}
        active={numbers === active}
        onClick={fncBtn}
      >
        {numbers}
      </Pagination.Item>
    );
  }

  return (
    <div className="main-container">
      <div className="pagination-container">
        <Pagination>{items}</Pagination>
      </div>
      <div className="search-container">
        <SearchBar data={props.fullData} fnc={props.searchFnc}></SearchBar>
      </div>
      <div className="sort-container">
        <Dropdown>
          <Dropdown.Toggle className="dropdown-button" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={props.sortFnc}>Everyone</Dropdown.Item>
            <Dropdown.Item onClick={props.sortFnc}>Manager</Dropdown.Item>
            <Dropdown.Item onClick={props.sortFnc}>Partner</Dropdown.Item>
            <Dropdown.Item onClick={props.sortFnc}>Team</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SortBar;
