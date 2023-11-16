import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

type props = {
  searchQuery: string;
  setSearchQuery: any;
  onClick: any;
};

export default function SearchBarField({ searchQuery, setSearchQuery, onClick }: props) {
  return (
    <>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            console.log(e);
            setSearchQuery(e.target.value);
          }}
          label="Enter a city name"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          onClick={() => {
            console.log("click " + searchQuery);
            onClick();
          }}
          aria-label="search"
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </>
  );
}
