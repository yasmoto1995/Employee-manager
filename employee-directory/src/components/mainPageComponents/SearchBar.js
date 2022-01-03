import { useState } from "react";
import "./SearchBar.css";

var fullData = [];

const SearchBar = (props) => {
  fullData = props.data;
  const [enteredSearch, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
    searchBtnFnc();
  };

  const searchBtnFnc = () => {
    if(enteredSearch.length <= 1)
      props.fnc(fullData);
    else{
      const updatedData = fullData.filter((el) => {
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
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="form-control input-search"
        placeholder="Search (minimum 3 characters)"
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
