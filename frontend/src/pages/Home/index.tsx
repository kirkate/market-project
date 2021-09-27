import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Banner } from '../../components/Banner';
import { getBannerData } from '../../services/api';

export const Home = () => {
  const [slides, setSlides] = useState(null);
  const slideTime = 5000;

  useEffect(() => {
    getBannerData().then((result) => {
      setSlides(result);
    });
  }, []);

  return (
    <Banner slides={slides} slideTime={slideTime} />
  );
};
