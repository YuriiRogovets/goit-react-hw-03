import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <h3>Find contacts by name</h3>
      <input type="text" name="searchName" />
    </div>
  );
};

export default SearchBox;
