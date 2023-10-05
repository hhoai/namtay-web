import config from '../config';

import Home from '../pages/HomePage/HomePage.js';
import Themes from '../pages/Themes/Themes.js';
import Affiliate from '../pages/Affiliate/Affiliate.js';
import Pricing from '../pages/Pricing/Pricing.js';
import Blog from '../pages/Blog/Blog.js';

import LogIn from '../pages/LogIn/LogIn.js';
import Register from '../pages/Register/Register';


const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.themes,
    component: Themes,
  },
  {
    path: config.routes.affiliate,
    component: Affiliate,
  },
  {
    path: config.routes.pricing,
    component: Pricing,
  },
  {
    path: config.routes.blog,
    component: Blog,
  },
  // {
  //   path: config.routes.stores,
  //   component: Stores,
  // },
  // {
  //   path: config.routes.product,
  //   component: Product,
  // },
  {
    path: config.routes.register,
    component: Register,
    layout: null,
  },
  {
    path: config.routes.login,
    component: LogIn,
    layout: null,
  },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
