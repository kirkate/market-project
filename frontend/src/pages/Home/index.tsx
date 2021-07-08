import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Banner } from '../../components/Banner/index';

export const Home = () => {
  const [slides, setSlides] = useState(null);
  const slideTime = 5000;

  const getBannerData = () => new Promise((resolve) => {
    const data = [
      {
        src: './images/watch_1.png',
      },
      {
        src: './images/ishop.jpg',
      },
      {
        src: './images/iphone_pro.png',
      },
      {
        src: './images/iphone.png',
      },
      {
        src: './images/touch_studio_banen.png',
      },
      {
        src: './images/touch_studio_baner.png',
      },
    ];

    resolve(data);
  });

  useEffect(() => {
    getBannerData().then((result) => {
      setSlides(result);
    });
  }, []);

  return (
    <Banner slides={slides} slideTime={slideTime} />
  );
};
