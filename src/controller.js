import "@babel/polyfill";
import "./style.css";
const fetch = require('isomorphic-fetch');

import * as data from './data.js';
import { getFeed } from './model.js';
// import { renderNews } from './view.js';

for (let [key, value] of data.channelsUrlArr) {
  key.addEventListener('click', function() {
    data.main.innerHTML = ' ';
    let renderNews;
    if(!renderNews) {
      import('./view.js' /* webpackChunkName: "rendernews" */).then(({renderNews}) => {
      getFeed(value)
      .then(articlesArr => renderNews(articlesArr));
      });
    } else {
      getFeed(value)
      .then(articlesArr => renderNews(articlesArr));
    }
  })
}
