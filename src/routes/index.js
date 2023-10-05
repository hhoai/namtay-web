import config from '../config';

import Home from '../pages/HomePage/HomePage.js';
import Themes from '../pages/Themes/Themes.js';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.themes,
    component: Themes,
  },
  // {
  //   path: config.routes.collections,
  //   component: Collections,
  // },
  // {
  //   path: config.routes.news,
  //   component: News,
  // },
  // {
  //   path: config.routes.contact,
  //   component: Contact,
  // },
  // {
  //   path: config.routes.stores,
  //   component: Stores,
  // },
  // {
  //   path: config.routes.product,
  //   component: Product,
  // },
  
  // {
  //   path: config.routes.search,
  //   component: Search,
  //   layout: null,
  // },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
