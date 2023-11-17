import Lottie from 'lottie-react';

import notFound from '@/assets/lottie/notFound.json';

const style = {
  width: '700px',
};

function NotFoundAnimation() {
  return <Lottie animationData={notFound} style={style} />;
}

export default NotFoundAnimation;
