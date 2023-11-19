/* Main -> RightSideCardView */
type BuildingCardType = {
  id: number;
  img: string;
  name: string;
  address: string;
  price: string;
  floor: number;
  area: string;
};

type BuildingInfoType = {
  imgPath: string;
  price: string;
  area: string;
  floor: number;
  year: string;
};

export { BuildingCardType, BuildingInfoType };
