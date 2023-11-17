import Lottie from 'lottie-react';

import loading from '@/assets/lottie/loading.json';

const style = {
  width: '350px',
};

function LoadingAnimation() {
  return <Lottie animationData={loading} style={style} />;
}

export default LoadingAnimation;
