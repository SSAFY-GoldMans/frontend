import Box from "@mui/material/Box";
import { Station } from "../@types/maps";
import { Container } from "@mui/material";

export default function StationBox({ title, location, time, price }: Station) {
  console.log("title: " + title);
  return (
    <>
      <Box>{title}</Box>
      <Box>{location}</Box>
      <Box>{time}</Box>
      <Box>{price}</Box>
    </>
  );
}
