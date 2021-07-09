export const getBannerData = () => new Promise((resolve) => {
  resolve(
    [
      {
        src: './images/800w/watch_x1.jpg',
        srcset: './images/1600w/watch_1600.jpg 1600w , ./images/1920w/watch.png 1920w ',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
        source: './images/700w/watch_700w.webp 1x',
        type: 'image/webp',
      },
      {
        src: '.images/800w/ishop_x1.jpg',
        srcset: './images/1600w/ishop_1600.jpg 1600w , ./images/1920w/ishop.jpg 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
        source: './images/700w/ishop_700w.webp 1x',
        type: 'image/webp',
      },
      {
        src: './images/800w/iphone_pro_x1.jpg',
        srcset: './images/1600w/iphone_pro_1600.jpg 1600w , ./images/1920w/iphone_pro.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
        source: './images/700w/iphone_pro_700w.webp 1x',
        type: 'image/webp',
      },
      {
        src: './images/800w/iphone_format_x1.jpg',
        srcset: './images/1600w/iphone_1600.jpg 1600w , ./images/1920w/iphone.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: './images/800w/touch_studio_baner_trade-in_x1.jpg',
        srcset: './images/1600w/baner_1600.jpg 1600w , ./images/1920w/baner.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
      {
        src: './images/800w/touch_studio_baner_watch_x1.jpg',
        srcset: './images/1600w/baner_watch_1600.jpg 1600w, ./images/1920w/touch_studio_baner.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
      },
    ],
  );
});
