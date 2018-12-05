import { main } from './data.js';

export const getFeed = async (url) => {
  try{
    let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=d334361b10a84149a9c274432a7ad999`);
    let jsonResponse = await response.json();
    let articlesArr = jsonResponse.articles;
    return articlesArr;
  } catch(err) {
    let modalContent;
    if(!modalContent) {
      import('./modal.js' /* webpackChunkName: "modal" */).then(({default: module}) => {
        module.close.addEventListener('click', function (){
          modal.classList.add("hidden");
        })
        module.modalcontent.innerHTML = err.message;
      });
    } else {
      modalcontent.innerHTML = err.message;
    }
  }
}
