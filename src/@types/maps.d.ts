declare global {
    interface Window {
      kakao: any;
    }
}
  
type Station = {
  title: string;
  location: string;
  time: number;
  price: number;
}

export {Station, }