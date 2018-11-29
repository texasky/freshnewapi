import "@babel/polyfill";
import "./style.css";
// const fetch = require('isomorphic-fetch');

import * as data from './data.js';
import { getFeed } from './model.js';
import { renderNews } from './view.js';

for (let [key, value] of data.channelsUrlArr) {
  key.addEventListener('click', function() {
    data.main.innerHTML = ' ';
    getFeed(value)
    .then(articlesArr => renderNews(articlesArr));
  })
}
