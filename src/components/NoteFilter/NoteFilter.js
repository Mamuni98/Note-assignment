import classes from "./NoteFilter.module.css";
import { useState } from "react";
const NoteFilter = () => {
  const [subject, setSubject] = useState("Physics");
  const filterSubjectHandler = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
  };
  console.log(subject);
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
