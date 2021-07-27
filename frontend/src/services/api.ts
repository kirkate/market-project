export const getBannerData = () => new Promise((resolve) => {
  resolve([
    {
      src: './images/800w/watch_x1.jpg',
      srcset:
          './images/1600w/watch_1600.jpg 1600w , ./images/1920w/watch.png 1920w ',
      sizes:
          '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
    },
    {
      src: '.images/800w/ishop_x1.jpg',
      srcset:
          './images/1600w/ishop_1600.jpg 1600w , ./images/1920w/ishop.jpg 1920w',
      sizes:
          '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
    },
    {
      src: './images/800w/iphone_pro_x1.jpg',
      srcset:
          './images/1600w/iphone_pro_1600.jpg 1600w , ./images/1920w/iphone_pro.png 1920w',
      sizes:
          '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
    },
    {
      src: './images/800w/iphone_format_x1.jpg',
      srcset:
          './images/1600w/iphone_1600.jpg 1600w , ./images/1920w/iphone.png 1920w',
      sizes:
          '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
    },
    {
      src: './images/800w/touch_studio_baner_trade-in_x1.jpg',
      srcset:
          './images/1600w/baner_1600.jpg 1600w , ./images/1920w/baner.png 1920w',
      sizes:
          '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
    },
    {
      src: './images/800w/touch_studio_baner_watch_x1.jpg',
      srcset:
          './images/1600w/baner_watch_1600.jpg 1600w, ./images/1920w/touch_studio_baner.png 1920w',
      sizes:
          '(max-width: 800px) 800px, (max-width: 1200px) 1600px, (min-width: 1201px) 1920px, 100vw',
    },
  ]);
});

export const getCaterogiesData = () => new Promise((resolve) => {
  resolve([
    {
      id: '1',
      slug: 'iphone',
      title: 'iPhone',
    },
    {
      id: '2',
      slug: 'ipad',
      title: 'iPad',
    },
    {
      id: '3',
      slug: 'watch',
      title: 'Watch',
    },
    {
      id: '4',
      slug: 'samsung',
      title: 'Samsung',
    },
    {
      id: '5',
      slug: 'accessories',
      title: 'Accessories',
    },
    {
      id: '6',
      slug: 'gadgets',
      title: 'Gadgets',
    },
  ]);
});

export const getCategoryData = (id) => new Promise((resolve) => {
  const categoryData = [
    {
      id: '1',
      products: [
        { id: '11', title: 'iPhone 12' },
        { id: '12', title: 'iPhone 11' },
        { id: '13', title: 'iPhone X' },
      ],
    },
    {
      id: '2',
      products: [
        { id: '14', title: 'iPad Pro 12.9' },
        { id: '15', title: 'iPad Pro 11' },
        { id: '16', title: 'iPad Pro 10.2' },
      ],
    },
    {
      id: '3',
      products: [
        { id: '17', title: 'Series 6' },
        { id: '18', title: 'Watch SE' },
        { id: '19', title: 'Series 5' },
      ],
    },
    {
      id: '4',
      products: [
        { id: '20', title: 'Galaxy S21' },
        { id: '21', title: 'Galaxy Note 20 Ultra' },
        { id: '22', title: 'Galaxy Note 20' },
      ],
    },
    {
      id: '5',
      products: [
        { id: '23', title: 'Apple Accessories' },
        { id: '24', title: 'iPhone cases' },
        { id: '25', title: 'Mac Accessories' },
      ],
    },
    {
      id: '6',
      products: [
        { id: '26', title: 'Playstation 5' },
        { id: '27', title: 'Grado SR80x headphones' },
        { id: '28', title: 'Fujifilm Instax Mini 40 camera' },
      ],
    },
  ];

  const activeCategory = categoryData.find((item) => item.id === id);
  resolve(activeCategory.products);
});

export const getProductsData = (id) => new Promise((resolve) => {
  const subCategoryData = [
    {
      id: '11',
      products: [
        {
          id: '111', title: 'iPhone 12 64 GB', price: '1800', quantity: null,
        },
        {
          id: '121', title: 'iPhone 12 128 GB ', price: '1400', quantity: null,
        },
        {
          id: '131', title: 'iPhone 12 256 GB', price: '1500', quantity: null,
        },
      ],
    },
    {
      id: '12',
      products: [
        {
          id: '112', title: 'iPhone 11 64 GB', price: '1900', quantity: null,
        },
        {
          id: '122', title: 'iPhone 11 128 GB ', price: '1200', quantity: null,
        },
        {
          id: '132', title: 'iPhone 11 256 GB', price: '1500', quantity: null,
        },
      ],
    },
    {
      id: '13',
      products: [
        {
          id: '113', title: 'iPhone X 64 GB', price: '1300', quantity: null,
        },
        {
          id: '123', title: 'iPhone X 128 GB ', price: '1530', quantity: null,
        },
        {
          id: '133', title: 'iPhone X 256 GB', price: '1500', quantity: null,
        },
      ],
    },
    {
      id: '14',
      products: [
        {
          id: '144', title: 'iPad Pro 12.9 64 GB', price: '1034', quantity: null,
        },
        {
          id: '154', title: 'iPad Pro 12.9 64 GB', price: '1040', quantity: null,
        },
        {
          id: '164', title: 'iPad Pro 12.9 64 GB', price: '1030', quantity: null,
        },
      ],
    },
    {
      id: '15',
      products: [
        {
          id: '145', title: 'iPad Pro 12.9 128 GB', price: '1300', quantity: null,
        },
        {
          id: '155', title: 'iPad Pro 12.9 128 GB', price: '1034', quantity: null,
        },
        {
          id: '165', title: 'iPad Pro 12.9 128 GB', price: '1340', quantity: null,
        },
      ],
    },
    {
      id: '16',
      products: [
        {
          id: '146', title: 'iPad Pro 12.9 256 GB', price: '1434', quantity: null,
        },
        {
          id: '156', title: 'iPad Pro 12.9 256 GB', price: '1430', quantity: null,
        },
        {
          id: '166', title: 'iPad Pro 12.9 256 GB', price: '1400', quantity: null,
        },
      ],
    },
  ];

  const activeSubCategory = subCategoryData.find((item) => item.id === id);
  resolve(activeSubCategory);
});
