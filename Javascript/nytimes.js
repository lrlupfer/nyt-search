 
//submit button 
$("#submit").on("click", function() {

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0d14ee7038734317adf5eff9f4be4afa"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(response) {
 
 var results = response.docs;

 $("#topArticles").prepend(results.snippet)


})
};