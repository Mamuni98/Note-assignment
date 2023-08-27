import classes from "./NoteFilter.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { noteFilterActions } from "../store/note-filter";
const NoteFilter = () => {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("Physics");

  useEffect(() => {
    dispatch(noteFilterActions.addFilterSubject(subject));
  }, [subject, dispatch]);

  const filterSubjectHandler = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <form className={classes.filtercontrol}>
        <label>Filter by Subject</label>
        <select value={subject} onChange={filterSubjectHandler}>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Biology">Biology</option>
        </select>
      </form>
    </div>
  );
};

export default NoteFilter;
