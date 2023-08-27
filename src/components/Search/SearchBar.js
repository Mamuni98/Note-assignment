import classes from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { noteFilterActions } from "../store/note-filter";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchLetters, setSearchLetters] = useState("");

  useEffect(() => {
    dispatch(noteFilterActions.addSearchLetter(searchLetters));
  }, [searchLetters, dispatch]);
  
  const searchHandler = (event) => {
    setSearchLetters(event.target.value);
  };
  return (
    <div className={classes.search}>
      <input
        placeholder="Search by Title..."
        value={searchLetters}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
