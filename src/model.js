export const getFeed = async (url) => {
  let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=d334361b10a84149a9c274432a7ad999`);
  let jsonResponse = await response.json();
  let articlesArr = jsonResponse.articles;
  return articlesArr;
}
