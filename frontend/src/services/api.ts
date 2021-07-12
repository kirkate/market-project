export const getBannerData = () => new Promise((resolve) => {
  resolve(
    [
      {
        src: './images/800w/watch_x1.jpg',
        srcset: './images/1600w/watch_1600.jpg 1600w , ./images/1920w/watch.png 1920w ',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',

      },
      {
        src: '.images/800w/ishop_x1.jpg',
        srcset: './images/1600w/ishop_1600.jpg 1600w , ./images/1920w/ishop.jpg 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',

      },
      {
        src: './images/800w/iphone_pro_x1.jpg',
        srcset: './images/1600w/iphone_pro_1600.jpg 1600w , ./images/1920w/iphone_pro.png 1920w',
        sizes: '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
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

export const getSideBarData = () => new Promise((resolve) => {
  resolve(
    [
      {
        id: '1',
        title: 'iPhone',
        path: '/iphone',
        models: [
          { title: 'iPhone 12' },
          { title: 'iPhone 11' },
          { title: 'iPhone X' },
        ],
      },
      {
        id: '2',
        title: 'iPad',
        path: '/ipad',
        models: [
          { title: 'iPad Pro 12.9' },
          { title: 'iPad Pro 11' },
          { title: 'iPad Pro 10.2' },
        ],
      },
      {
        id: '3',
        title: 'Watch',
        path: '/watch',
        models: [
          { title: 'Series 6' },
          { title: 'Watch SE' },
          { title: 'Series 5' },
        ],
      },
      {
        id: '4',
        title: 'Samsung',
        path: '/samsung',
        models: [
          { title: 'Galaxy S21' },
          { title: 'Galaxy Note 20 Ultra' },
          { title: 'Galaxy Note 20' },
        ],
      },
      {
        id: '5',
        title: 'Accessories',
        path: '/accessories',
        models: [
          { title: 'Apple Accessories' },
          { title: 'iPhone cases' },
          { title: 'Mac Accessories' },
        ],
      },
      {
        id: '6',
        title: 'Gadgets',
        path: '/gadgets',
        models: [
          { title: 'Playstation 5' },
          { title: 'Grado SR80x headphones' },
          { title: 'Fujifilm Instax Mini 40 camera' },
        ],
      },
    ],

  );
});
