export const main = document.getElementsByTagName('main')[0];
export const bbc = document.getElementById('bbc');
export const cnn = document.getElementById('cnn');
export const lenta = document.getElementById('lenta');
export const reuters = document.getElementById('reuters');
export const natgeo = document.getElementById('natgeo');
export const channelsUrlArr = new Map([
  [bbc, 'bbc-news'],
  [cnn, 'cnn'],
  [lenta, 'lenta'],
  [reuters, 'reuters'],
  [natgeo, 'national-geographic']
]);
