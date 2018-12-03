import {main} from './data.js';
import "./newsstyle.css";

export const renderNews = articles => {
  articles.map((article) => {
    let articleCell =
      `<div class="articlecell" style="background: url('${article.urlToImage}') no-repeat center;">
        <div class="titleblock"><h2 class="title">'${article.title}'</h2></div>
        <div class="descriptionblock"><p>'${article.description}'</p></div>
       </div>`;
    main.innerHTML += articleCell;
  });
}
