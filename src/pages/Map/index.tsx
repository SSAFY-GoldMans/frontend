import { Container, Box } from "@mui/material";

import { Station } from "../../@types/maps";
import ColorToggleButton from "../../components/ToggleButton";
import KakaoMap from "../../components/KaKaoMap";
import StationBox from "../../components/StationBox";

function Map() {
  const stations: Station[] = [
    {
      title: "강남역",
      location: "서울특별시 강남구 역삼동",
      time: 3,
      price: 500000,
    },
    {
      title: "강남역",
      location: "서울특별시 강남구 역삼동",
      time: 3,
      price: 500000,
    },
  ];
  console.log(stations);
  return (
    <>
      <Container maxWidth="sm">
        <KakaoMap />
        <ColorToggleButton />
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          {stations.map((station) => {
            console.log(station);
            return <StationBox {...station} />;
          })}
        </Box>
      </Container>
    </>
  );
}

export default Map;
