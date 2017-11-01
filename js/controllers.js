/* controllers */
var MovieControllers = angular.module('MovieControllers', []);

/* controller (home page) */ 
MovieControllers.controller('HomeCtrl', function ($scope) {
	 document.getElementById("greeting").innerHTML = 'Movies';
     // navigate to the movie list page
     $scope.LIST_movies = function() { window.location.hash = '!/list_pages'; }
});

/* controller (list page) */ 
MovieControllers.controller('ListCtrl', function ($scope, $rootScope) {		

// array that holds values for the dropdown select filter
$scope.genres = ['', 'Action', 'Mystery', 'Fantasy', 'Comedy'];

// json that holds the movie data listed in list view
$scope.movies =
[
  {
    "title": "Deadpool",
    "year": "2015",
    "genre": "Mystery",
    "rating": 7.4,
    "_id": "ct0003"
  },
    {
    "title": "Captain America",
    "year": "2016",
    "genre": "Action",
    "rating": 7.1,
    "_id": "ct0005"
  },
  {
    "title": "Doctor Strange",
    "year": "2010",
    "genre": "Fantasy",
    "rating": 6.6,
    "_id": "ct0007"
  },
  {
    "title": "Doctor Demon",
    "year": "2009",
    "genre": "Fantasy",
    "rating": 6.1,
    "_id": "ct0008"
  },
    {
    "title": "Una",
    "year": "2013",
    "genre": "Comedy",
    "rating": 7.9,
    "_id": "ct0009"
  },
  {
    "title": "Fruits",
    "year": "2013",
    "genre": "Mystery",
    "rating": 5.4,
    "_id": "ct0010"
  },
    {
    "title": "Captain Nickolas",
    "year": "2011",
    "genre": "Action",
    "rating": 3.1,
    "_id": "ct0011"
  },
  {
    "title": "Fatal Dead Strange",
    "year": "2015",
    "genre": "Fantasy",
    "rating": 5.6,
    "_id": "ct0012"
  },
  {
    "title": "Swim",
    "year": "2000",
    "genre": "Fantasy",
    "rating": 6.5,
    "_id": "ct0013"
  },
    {
    "title": "Malta",
    "year": "2014",
    "genre": "Comedy",
    "rating": 6.9,
    "_id": "ct0014"
  }
];

// navigates to detail page 
$scope.movieDetails = function(id) {
	window.location.hash = '!/movie' + '/' + id; // redirect to details view
}

// sorts results
$scope.sort = function(keyname) {
    $scope.sortKey = keyname;   	   // set the sortKey to the param passed
    $scope.reverse = !$scope.reverse;  // if true make it false and vice versa (switches glyphicon)
}

// resets filter
$scope.reset = function() { $scope.search=''; };

});


/* controller (detail page) */ 
MovieControllers.controller('DetailCtrl', function ($scope, $rootScope, $routeParams) {		

var id = $routeParams.id;
$scope.movieID = id;


// json that holds detailed data for each movie
$scope.details =
[
  {
    "title": "Deadpool",
    "year": "2015",
    "genre": "Mystery",
    "rating": 7.4,
    "_id": "ct0003",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct003.jpg"
  },
    {
    "title": "Captain America",
    "year": "2016",
    "genre": "Action",
    "rating": 7.1,
    "_id": "ct0005",
    "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "director": "Francis Ford Coppola",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct005.jpg"
  },
  {
    "title": "Doctor Strange",
    "year": "2010",
    "genre": "Fantasy",
    "rating": 6.6,
    "_id": "ct0007",
    "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct007.jpg"
  },
  {
    "title": "Doctor Demon",
    "year": "2009",
    "genre": "Fantasy",
    "rating": 6.1,
    "_id": "ct0008",
    "description": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "director": "Francis Ford Coppola",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct008.jpg"
  },
    {
    "title": "Una",
    "year": "2013",
    "genre": "Comedy",
    "rating": 7.9,
    "_id": "ct0009",
    "description": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct009.jpg"
  },
  {
    "title": "Fruits",
    "year": "2013",
    "genre": "Mystery",
    "rating": 5.4,
    "_id": "ct0010",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct010.jpg"
  },
    {
    "title": "Captain Nickolas",
    "year": "2011",
    "genre": "Action",
    "rating": 3.1,
    "_id": "ct0011",
    "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "director": "Francis Ford Coppola",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct011.jpg"
  },
  {
    "title": "Fatal Dead Strange",
    "year": "2015",
    "genre": "Fantasy",
    "rating": 5.6,
    "_id": "ct0012",
    "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct012.jpg"
  },
  {
    "title": "Swim",
    "year": "2000",
    "genre": "Fantasy",
    "rating": 6.5,
    "_id": "ct0013",
    "description": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "director": "Francis Ford Coppola",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct013.jpg"
  },
    {
    "title": "Malta",
    "year": "2014",
    "genre": "Comedy",
    "rating": 6.9,
    "_id": "ct0014",
    "description": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "director": "Quentin Tarantino",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "photourl": "./img/ct014.jpg"
  }
];

// finds data for corresponding movie after firing detail button
var index = $scope.details.findIndex(function(item, i){
  return item._id == id
});
console.log(index);

// pass data to scope
$scope.title = $scope.details[index].title;
$scope.photourl = $scope.details[index].photourl;
$scope.director = $scope.details[index].director;
$scope.cast = $scope.details[index].cast;
$scope.description = $scope.details[index].description;

// navigates back to list page
$scope.goBack = function() { window.location.hash = '!/list_pages'; };

});

