 

$("form").on("submit", function(event) {
    event.preventDefault();
var query = "?q=xyz";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?api-key=d7aef318229e4ddc919f69bbd300166e';
    url += "&q=" + query;

console.log(url);

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

});