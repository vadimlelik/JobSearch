import Button from "../Button";
import { ReactComponent as SearchIcon } from "./icon/search_icon.svg";
import style from "./Search.module.css";

const Search = ({ value, onSearch, handleSearch }) => (
  <div className={style.SearchInputWrapper}>
    <input
      className={style.SearchInput}
      placeholder="Введите название вакансии"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      data-elem="search-input"
    />
    <Button
      className={style.SearchButton}
      size="S"
      onClick={handleSearch}
      data-elem="search-button"
    >
      Поиск
    </Button>
    <SearchIcon className={style.SearchIcon} />
  </div>
);

export default Search;
