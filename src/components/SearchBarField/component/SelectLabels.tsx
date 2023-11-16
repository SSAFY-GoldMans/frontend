import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect } from "react";

type props = {
  selectedOption: string;
  handleChange: (e: SelectChangeEvent) => void;
  options: Array<string>;
};

export default function SelectLabels({ selectedOption, handleChange, options }: props) {
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };
  // let selectedIdx = 0;
  console.log(selectedOption);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">유형</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedOption}
          label="유형"
          onChange={handleChange}
        >
          {options &&
            options.map((option, idx) => {
              return (
                <MenuItem key={idx} value={option}>
                  {option}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </>
  );
}
