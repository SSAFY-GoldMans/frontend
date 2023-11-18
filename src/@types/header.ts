type HeaderInfoType = {
  title: string;
  comment: string;
  optionType: HeaderOptionType[];
};

type HeaderOptionType = {
  title: string;
  path: string;
};

export { HeaderInfoType, HeaderOptionType };
