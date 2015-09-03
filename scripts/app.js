
var app=angular.module("myApp",[
  'ngRoute',
  'myApp.utils.cache',
  'myApp.contacts.service',
  'myApp.utils.service'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    }).when('/About', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    }).when('/Contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    }).when('/ShowContact/:contactID', {
        templateUrl: 'templates/contact_details.html',
        controller: 'ShowContactController'
    }).otherwise({
        redirectTo: '/Home'
    })

}]);

//this fixes a broken Ui on refresh
app.run(['contacts','$location', function(contacts,$location) {
  if ($location.$$path.indexOf('/ShowContact') >-1){
  contacts.All();
  }
}]);

app.controller('HomeController',function($scope){
  $scope.message="This is the home page";
})

app.controller('AboutController',function($scope){
  $scope.message="This is the about page";
})

app.controller('ContactController',['$scope','contacts',function($scope,contacts){
 $scope.contacts=contacts.All();

}])
app.controller('ShowContactController',['$scope','$routeParams','contacts','$window',function($scope,$routeParams,contacts,$window){
$scope.contact=contacts.getContactByID($routeParams.contactID);
$scope.back=function(){
     $window.location.href='#/Contact';
   }
}]);
