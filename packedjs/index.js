const main = document.getElementsByTagName('main')[0];
const bbc = document.getElementById('bbc');
const cnn = document.getElementById('cnn');
const lenta = document.getElementById('lenta');
const reuters = document.getElementById('reuters');
const natgeo = document.getElementById('natgeo');

const channelsUrlArr = new Map([
  [bbc, 'bbc-news'],
  [cnn, 'cnn'],
  [lenta, 'lenta'],
  [reuters, 'reuters'],
  [natgeo, 'national-geographic']
]);

const getFeed = async (url) => {
  let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=d334361b10a84149a9c274432a7ad999`);
  let jsonResponse = await response.json();
  let articlesArr = jsonResponse.articles;
  return articlesArr;
}

for (let [key, value] of channelsUrlArr) {
  key.addEventListener('click', function() {
    main.innerHTML = ' ';
    getFeed(value)
    .then(articlesArr => renderNews(articlesArr));
  })
}

const renderNews = articles => {
  articles.map((article) => {
    let articleCell =
      `<div class="articlecell" style="background: url('${article.urlToImage}') no-repeat center; background-color: rgba(0,0,0,.5); background-blend-mode: darken;">
        <div class="titleblock"><h2 class="title">'${article.title}'</h2></div>
        <div class="descriptionblock"><p>'${article.description}'</p></div>
       </div>`;
    main.innerHTML += articleCell;
  });
}
