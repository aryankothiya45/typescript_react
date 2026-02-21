import { JSX, useState, useCallback } from "react";

const IMAGES : string[] = [
    "https://i.imgur.com/Mx7dA2Y.jpg",
    "https://i.imgur.com/aTtVpES.jpg",
    "https://i.imgur.com/2heNQDcm.jpg",
  ];
  
  const ALT: string= "Gallery";
  const WIDTH: number = 250;
  const HEIGHT: number = 250;

const Gallery= (): JSX.Element => {

  const [index, setIndex] = useState<number>(0);

  const handleNextClick = useCallback((): void => {
    setIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  }, []);

  const handlePrevClick = useCallback((): void => {
    setIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  return (
    
    <div>
      <img src={IMAGES[index]} alt={ALT} width={WIDTH} height={HEIGHT} />
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <hr />
    </div>
  );
}
export default Gallery;