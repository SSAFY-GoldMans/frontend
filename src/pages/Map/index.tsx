import { Container, Box } from "@mui/material";

import { Station } from "../../@types/map";
import ColorToggleButton from "../../components/ToggleButton";
import KakaoMap from "../../components/KakaoMap";
import StationBox from "../../components/StationBox";

declare global {
  interface Window {
    kakao: any;
  }
}

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

  return (
    <Container maxWidth="sm">
      <KakaoMap />
      <ColorToggleButton />
      <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
        {stations.map((station) => {
          return <StationBox {...station} />;
        })}
      </Box>
    </Container>
  );
}

export default Map;
