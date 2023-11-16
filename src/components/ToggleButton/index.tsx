import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ColorToggleButton() {
  const values = ["전세", "월세", "매매"];
  const [alignment, setAlignment] = React.useState(values[0]);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
      {values.map((value, idx: number) => (
        <ToggleButton key={idx} value={value}>
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ColorToggleButton;
