import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBarField from "./component/SearchBarField";
import { SelectChangeEvent } from "@mui/material";
import SelectLabels from "./component/SelectLabels";

function SearchAppBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // const [duration, setDuration] = useState<string>("");

  const onClickSearchButton = () => {
    console.log(`query: ${searchQuery}`);
    if (searchQuery.trim()) {
      console.log("navigate to map");
      navigate(`/map?searchKey=${searchQuery}`);
    }
  };

  const [selectedOption, setSelectedOption] = useState<string>("전세");
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target);
    setSelectedOption(event.target.value);
  };

  const options: string[] = ["전세", "월세", "매매"];

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <SearchBarField
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onClick={onClickSearchButton}
      />

      <SelectLabels selectedOption={selectedOption} handleChange={handleChange} options={options} />
    </div>
  );
}

export default SearchAppBar;
