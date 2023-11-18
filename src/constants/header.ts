import { HeaderInfoType } from '@/@types/header';

// TODO: 추후 PATH 수정

const HeaderAptType: HeaderInfoType = {
  title: '아파트',
  comment: '매매/전세/월세',
  optionType: [
    {
      title: '매매',
      path: '?',
    },
    {
      title: '전세',
      path: '?',
    },
    {
      title: '월세',
      path: '?',
    },
  ],
};

const HeaderOfficetelType: HeaderInfoType = {
  title: '오피스텔',
  comment: '도시생활주택/전세/월세',
  optionType: [
    {
      title: '오피스텔 찾기',
      path: '?',
    },
    {
      title: '찜한 매물',
      path: '?',
    },
  ],
};

export { HeaderAptType, HeaderOfficetelType };
