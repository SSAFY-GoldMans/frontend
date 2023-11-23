import { HeaderInfoType } from '@/@types/header';
import { BROWSER_PATH } from './path';
import { BUILDING, SALES } from './building';

const HeaderAptType: HeaderInfoType = {
  title: '아파트',
  comment: '전세/월세',
  path: BROWSER_PATH.HOME,
  optionType: [
    {
      title: '전세',
      path: `${BROWSER_PATH.HOME}?building=${BUILDING.APT}&type=${SALES.JEONSE}`,
    },
    {
      title: '월세',
      path: `${BROWSER_PATH.HOME}?building=${BUILDING.APT}&type=${SALES.MONTHLY}`,
    },
  ],
};

const HeaderOfficetelType: HeaderInfoType = {
  title: '오피스텔',
  comment: '도시생활주택/전세/월세',
  path: BROWSER_PATH.HOME,
  optionType: [
    {
      title: '전세',
      path: `${BROWSER_PATH.HOME}?building=${BUILDING.OFFIECTEL}&type=${SALES.JEONSE}`,
    },
    {
      title: '월세',
      path: `${BROWSER_PATH.HOME}?building=${BUILDING.OFFIECTEL}&type=${SALES.MONTHLY}`,
    },
  ],
};

const HeaderLoginType: HeaderInfoType = {
  title: '나의 정보',
  comment: '정보수정',
  path: BROWSER_PATH.MY,
  optionType: [],
};

export { HeaderAptType, HeaderOfficetelType, HeaderLoginType };
