function setParamsSearch(s, plot, r, tomatoes){
let url = new URL("http://www.omdbapi.com/?");
let params = { s, plot, r, tomatoes };
Object.keys(params).forEach((key) => {
  url.searchParams.append(key, params[key])
});
return url
}

export const searchOMDB = (text) => {
let url = setParamsSearch(text, 'full', 'json', 'true');
console.log(url);
return new Promise(function(resolve, reject) {
  fetch(url)
    .then((value) => {return value.json()})
    .then((data) => {resolve(data)})
    .catch((err) => {reject(err)})
  });
}










// const queryString = require('query-string');
//
// export const searchOMDB = (title) => {
//   let urlSearch = new URLSearchParams()
//   let params = {s: title};
//   const stringified = queryString.stringify(params);
//   console.log(stringified);
//   Object.keys(params).forEach(key => urlSearch.append(key, params[key]));
//   return new Promise(function(resolve, reject) {
//     fetch("http://www.omdbapi.com/?"+stringified)
//       .then((response) => {return response.json})
//       .then((data) => {resolve(data)})
//   });
//
// }
