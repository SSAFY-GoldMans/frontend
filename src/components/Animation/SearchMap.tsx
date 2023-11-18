import Lottie from 'lottie-react';

import search from '@/assets/lottie/search.json';

const style = {
  width: '400px',
};

function SearchMapAnimation() {
  return <Lottie animationData={search} style={style} />;
}

export default SearchMapAnimation;
