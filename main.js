const main = document.getElementsByTagName('main')[0];
const bbc = document.getElementById('bbc');
const cnn = document.getElementById('cnn');
const lenta = document.getElementById('lenta');
const reuters = document.getElementById('reuters');
const natgeo = document.getElementById('natgeo');

const bbcFeedUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d334361b10a84149a9c274432a7ad999';
const cnnFeedUrl = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=d334361b10a84149a9c274432a7ad999';
const lentaFeedUrl = 'https://newsapi.org/v2/top-headlines?sources=lenta&apiKey=d334361b10a84149a9c274432a7ad999';
const reutersFeedUrl = 'https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=d334361b10a84149a9c274432a7ad999';
const natgeoFeedUrl = 'https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=d334361b10a84149a9c274432a7ad999';

const getFeed = async (url) => {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  let articlesArr = jsonResponse.articles;
  return articlesArr;
}

const renderNews = articles => {
  articles.map((article) => {
    let articleCell =
      `<div class="articlecell" style="background: url('${article.urlToImage}') no-repeat">
        <div class="titleblock"><h2 class="title">'${article.title}'</h2></div>
        <div class="descriptionblock"><p>'${article.description}'</p></div>
       </div>`;
    main.innerHTML += articleCell;
  });
}

bbc.addEventListener('click', function() {
  main.innerHTML = ' ';
  getFeed(bbcFeedUrl)
  .then(articlesArr => renderNews(articlesArr));
})

cnn.addEventListener('click', function() {
  main.innerHTML = ' ';
  getFeed(cnnFeedUrl)
  .then(articlesArr => renderNews(articlesArr));
})

lenta.addEventListener('click', function() {
  main.innerHTML = ' ';
  getFeed(lentaFeedUrl)
  .then(articlesArr => renderNews(articlesArr));
})

reuters.addEventListener('click', function() {
  main.innerHTML = ' ';
  getFeed(reutersFeedUrl)
  .then(articlesArr => renderNews(articlesArr));
})

natgeo.addEventListener('click', function() {
  main.innerHTML = ' ';
  getFeed(natgeoFeedUrl)
  .then(articlesArr => renderNews(articlesArr));
})
