import classes from "./SearchBar.module.css";

const SearchBar = () => {
    return <div className={classes.search}>
        <input placeholder="Search by Title..."/>
    </div>
}

export default SearchBar;