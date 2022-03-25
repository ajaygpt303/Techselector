import faker from 'faker';
import _ from 'lodash';
import { config } from '../services/config';

const brandAndImage = _.flatten(
  _.times(20, i => {
    return ['android', 'ios', 'buisness-laptop', 'gaming-laptop', 'camera'].map(
      (brand, j) => {
        return { brand, image: `${brand}${i + 1}.jpg` };
      },
    );
  }),
);

const imageColorMap = [
  { brand: 'android1', color: 'V-High' },
  { brand: 'android2', color: 'High' },
  { brand: 'android3', color: 'High' },
  { brand: 'android4', color: 'High' },
  { brand: 'android5', color: 'Below-Average' },
  { brand: 'android6', color: 'High' },
  { brand: 'android7', color: 'Above-Average' },
  { brand: 'android8', color: 'Average' },
  { brand: 'android9', color: 'Low' },
  { brand: 'android10', color: 'Average' },
  { brand: 'android11', color: 'Average' },
  { brand: 'android12', color: 'Above-Average' },
  { brand: 'android13', color: 'Above-Average' },
  { brand: 'android14', color: 'Below-Average' },
  { brand: 'android15', color: 'Above-Average' },
  { brand: 'android16', color: 'Above-Average' },
  { brand: 'android17', color: 'V-Low' },
  { brand: 'android18', color: 'V-High' },
  { brand: 'android19', color: 'V-Low' },
  { brand: 'android20', color: 'Low' },
  { brand: 'ios1', color: 'Above-Average' },
  { brand: 'ios2', color: 'Below-Average' },
  { brand: 'ios3', color: 'Below-Average' },
  { brand: 'ios4', color: 'V-High' },
  { brand: 'ios5', color: 'High' },
  { brand: 'ios6', color: 'Above-Average' },
  { brand: 'ios7', color: 'V-High' },
  { brand: 'ios8', color: 'Above-Average' },
  { brand: 'ios9', color: 'Low' },
  { brand: 'ios10', color: 'Above-Average' },
  { brand: 'ios11', color: 'High' },
  { brand: 'ios12', color: 'V-High' },
  { brand: 'ios13', color: 'V-High' },
  { brand: 'ios14', color: 'V-Low' },
  { brand: 'ios15', color: 'Average' },
  { brand: 'ios16', color: 'Average' },
  { brand: 'ios17', color: 'V-Low' },
  { brand: 'ios18', color: 'High' },
  { brand: 'ios19', color: 'Average' },
  { brand: 'ios20', color: 'Low' },
  { brand: 'buisness-laptop1', color: 'V-High' },
  { brand: 'buisness-laptop2', color: 'Above-Average' },
  { brand: 'buisness-laptop3', color: 'High' },
  { brand: 'buisness-laptop4', color: 'V-High' },
  { brand: 'buisness-laptop5', color: 'Above-Average' },
  { brand: 'buisness-laptop6', color: 'V-High' },
  { brand: 'buisness-laptop7', color: 'Average' },
  { brand: 'buisness-laptop8', color: 'V-High' },
  { brand: 'buisness-laptop9', color: 'High' },
  { brand: 'buisness-laptop10', color: 'V-High' },
  { brand: 'buisness-laptop11', color: 'Above-Average' },
  { brand: 'buisness-laptop12', color: 'V-Low' },
  { brand: 'buisness-laptop13', color: 'Low' },
  { brand: 'buisness-laptop14', color: 'Low' },
  { brand: 'buisness-laptop15', color: 'V-Low' },
  { brand: 'buisness-laptop16', color: 'High' },
  { brand: 'buisness-laptop17', color: 'Below-Average' },
  { brand: 'buisness-laptop18', color: 'Below-Average' },
  { brand: 'buisness-laptop19', color: 'Average' },
  { brand: 'buisness-laptop20', color: 'High' },
  { brand: 'gaming-laptop1', color: 'V-High' },
  { brand: 'gaming-laptop2', color: 'Above-Average' },
  { brand: 'gaming-laptop3', color: 'V-High' },
  { brand: 'gaming-laptop4', color: 'V-High' },
  { brand: 'gaming-laptop5', color: 'High' },
  { brand: 'gaming-laptop6', color: 'High' },
  { brand: 'gaming-laptop7', color: 'High' },
  { brand: 'gaming-laptop8', color: 'V-High' },
  { brand: 'gaming-laptop9', color: 'High' },
  { brand: 'gaming-laptop10', color: 'V-Low' },
  { brand: 'gaming-laptop11', color: 'Below-Average' },
  { brand: 'gaming-laptop12', color: 'V-High' },
  { brand: 'gaming-laptop13', color: 'Above-Average' },
  { brand: 'gaming-laptop14', color: 'Above-Average' },
  { brand: 'gaming-laptop15', color: 'Low' },
  { brand: 'gaming-laptop16', color: 'Low' },
  { brand: 'gaming-laptop17', color: 'Below-Average' },
  { brand: 'gaming-laptop18', color: 'Average' },
  { brand: 'gaming-laptop19', color: 'V-Low' },
  { brand: 'gaming-laptop20', color: 'Average' },
  { brand: 'camera1', color: 'Below-Average' },
  { brand: 'camera2', color: 'V-High' },
  { brand: 'camera3', color: 'Above-Average' },
  { brand: 'camera4', color: 'Below-Average' },
  { brand: 'camera5', color: 'High' },
  { brand: 'camera6', color: 'V-High' },
  { brand: 'camera7', color: 'V-High' },
  { brand: 'camera8', color: 'High' },
  { brand: 'camera9', color: 'Average' },
  { brand: 'camera10', color: 'V-High' },
  { brand: 'camera11', color: 'High' },
  { brand: 'camera12', color: 'Below-Average' },
  { brand: 'camera13', color: 'Low' },
  { brand: 'camera14', color: 'V-High' },
  { brand: 'camera15', color: 'V-Low' },
  { brand: 'camera16', color: 'V-Low' },
  { brand: 'camera17', color: 'Low' },
  { brand: 'camera18', color: 'V-Low' },
  { brand: 'camera19', color: 'Above-Average' },
  { brand: 'camera20', color: 'Average' },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getProducts = () => {
  const products = _.times(100, index => {
    const color = imageColorMap.find(
      i => i.brand === brandAndImage[index].image.replace('.jpg', ''),
    ).color;
    // console.log(color);
    return {
      id: index,
      isAdvert: false,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price(500,1500)),
      brand: brandAndImage[index].brand,
      image: brandAndImage[index].image,
      color: color,
      size: getRandomInt(3, 20),
      weight: getRandomInt(4, 40),
      shortDescription: faker.lorem.words(),
      modelNum: faker.random.number(),
      delivery: [
        faker.address.country(),
        faker.address.country(),
        faker.address.country(),
      ].join(', '),
      description:
        faker.lorem
          .paragraph()
          .split('.', 2)
          .join('.') + '.',
    };
  }).sort((a, b) => 0.5 - Math.random());
  return products;
};

const advertisements = _.times(10, index => ({
  id: index,
  isAdvert: true,
  name: faker.commerce.productName(),
  image: faker.image.business(),
  description:
    faker.lorem
      .paragraph()
      .split('.', 3)
      .join('.') + '.',
  link1: faker.internet.url(),
  link2: faker.internet.url(),
  time: faker.date.recent(),
}));

export const getProductsData = params => {
  //params = { page: { index: 0, size: 15 }, filter: 'mepps', sort: {key:'price', direction:'asc'} };
  let products = getProducts();

  if (params && 'filter' in params && params.filter.brand !== 'none')
    products = products.filter(
      product => product.brand === params.filter.brand,
    );

  if (params && 'filter' in params && params.filter.color !== 'none')
    products = products.filter(
      product => product.color === params.filter.color,
    );

  if (params && 'sort' in params && params.sort.key !== 'none') {
    function compare(a, b) {
      if (a[params.sort.key] < b[params.sort.key]) return -1;
      if (a[params.sort.key] > b[params.sort.key]) return 1;
      return 0;
    }
    products = products.sort(compare);
    if (params.sort.direction === 'desc') products = products.reverse();
  }

  if (params && 'page' in params) {
    products = products.slice(
      parseInt(params.page.index),
      parseInt(params.page.index) + parseInt(params.page.size),
    );
  }

  return products;
};
export const getProductData = id => {
  let products = getProducts();
  let product = {};
  id = parseInt(id);

  if (!Number.isNaN(id) && products.length > id)
    product = products.find(product => product.id === id);

  return product;
};
export const getAdvertisementsData = () => advertisements;
