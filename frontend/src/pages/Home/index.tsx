import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Banner } from '../../components/Banner/index';

export const Home = () => {
  const [slides, setSlides] = useState(null);
  const slideTime = 5000;

  const getBannerData = () => new Promise((resolve) => {
    const data = [

      {
        src: './images/800w/watch_x1.jpg',
        srcset: './images/1600w/watch_1_1600_900.jpg 1600w , ./images/1920w/watch_1.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: '.images/800w/ishop_x1.jpg',
        srcset: './images/1600w/ishop_1600_900.jpg 1600w , ./images/1920w/ishop.jpg 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: './images/800w/iphone_pro_x1.jpg',
        srcset: './images/1600w/iphone_pro_1600_900.jpg 1600w , ./images/1920w/iphone_pro.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: './images/800w/iphone_format_x1.jpg',
        srcset: './images/1600w/iphone_format_2_1600_900.jpg 1600w , ./images/1920w/iphone.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: './images/800w/touch_studio_baner_trade-in_x1.jpg',
        srcset: './images/1600w/touch_studio_baner_1600_900.jpg 1600w , ./images/1920w/touch_studio_banen.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: './images/800w/touch_studio_baner_watch_x1.jpg',
        srcset: './images/1600w/baner_watch_1600.jpg 1600w, ./images/1920w/touch_studio_baner.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
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
