import {main} from './data.js';

export const renderNews = articles => {
  articles.map((article) => {
    let articleCell =
      `<div class="articlecell" style="background: url('${article.urlToImage}') no-repeat center; background-color: rgba(0,0,0,.5); background-blend-mode: darken;">
        <div class="titleblock"><h2 class="title">'${article.title}'</h2></div>
        <div class="descriptionblock"><p>'${article.description}'</p></div>
       </div>`;
    main.innerHTML += articleCell;
  });
}
