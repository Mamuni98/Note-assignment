import classes from "./NoteFilter.module.css";

const NoteFilter = () => {
  return (
    <div className={classes.filter}>
      <div className={classes.filtercontrol}>
        <label>Filter by Subject</label>
        <select>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Biology">Biology</option>
        </select>
      </div>
    </div>
  );
};

export default NoteFilter;
