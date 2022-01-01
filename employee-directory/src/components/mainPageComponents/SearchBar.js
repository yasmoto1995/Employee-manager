import { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  console.log(props.data);
  const [enteredSearch, setSearch] = useState("");
  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="search">
      <input
        type="text"
        className="form-control input-search"
        placeholder="Search"
        aria-label="Search"
        onChange={searchChangeHandler}
      />
      <button type="submit" className="btn btn-primary btn-search">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
