import Lottie from 'lottie-react';

import train from '@/assets/lottie/train.json';

const style = {
  width: '400px',
};

function TrainAnimation() {
  return <Lottie animationData={train} style={style} />;
}

export default TrainAnimation;
