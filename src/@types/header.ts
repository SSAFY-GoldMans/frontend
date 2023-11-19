type HeaderInfoType = {
  title: string;
  comment: string;
  path: string;
  optionType: HeaderOptionType[];
};

type HeaderOptionType = {
  title: string;
  path: string;
};

export { HeaderInfoType, HeaderOptionType };
