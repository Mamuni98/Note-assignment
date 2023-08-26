import classes from "./NoteForm.module.css";

const NoteForm = () => {
  return (
    <>
      <form>
        <div className={classes.form}>
          <div className={classes.control}>
            <label>Title</label>
            <input type="text" placeholder="Enter title of your note"/>
          </div>
          <div className={classes.control}>
            <label>Subject</label>
            <select>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
          <div className={classes.control}>
            <label>Note</label>
            <textarea rows="4" cols="50" placeholder="Add note here..."></textarea>
          </div>

          <div className={classes.actions}>
            <button type="button">Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
