import classes from "./Note.module.css";

const Note = (props) => {
  return (
    <li className={classes.list}>
      <div className={classes.listcontent}>
        <h3>{props.title}</h3>
        <h4>{props.subject}</h4>
      </div>
      <div className={classes.listbtns}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default Note;
