import { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const info = props.data;
  const [enteredSearch, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchBtnFnc = () => {
    const updatedData = info.filter((el) => {
      const name = el.firstName + " " + el.lastName;

      if (
        name.slice(0, enteredSearch.length).toLocaleLowerCase() ===
        enteredSearch.toLocaleLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
    });
    props.fnc(updatedData);
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
      <button
        type="submit"
        className="btn btn-primary btn-search"
        onClick={searchBtnFnc}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
