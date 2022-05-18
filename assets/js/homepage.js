var getUserRepos = function(user){
  //format the gitub api url
  var apiUrl = "https://api.github.com/user/" + user + "/repos";

  //make a request to the url
  fetch(apiUrl).then(function(response){
    response.json().then(function(data){
      console.log(data);
    });
  });
};




// var response = fetch("https://api.github.com/users/octocat/repos").then(function(response){
//   response.json().then(function(data){
//     console.log(data);
//   });
// });

//console.log(response);
//console.log("inside", response);
//console.log("outside");

