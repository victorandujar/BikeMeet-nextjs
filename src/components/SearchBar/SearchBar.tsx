import { tertyaryFont } from "@/utils/fonts/fonts";
import SearchBarStyled from "./SearchBarStyled";

const SearchBar = (): React.ReactElement => {
  return (
    <SearchBarStyled
      className={`d-flex ${tertyaryFont.className}`}
      role="search"
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        type="submit"
        className="btn btn-primary btn-primary-accent"
        disabled
      >
        Search
      </button>
    </SearchBarStyled>
  );
};

export default SearchBar;
