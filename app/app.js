var myApp = angular.module("myApp",["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider({
    url: "/",
    templateUrl: "./app/homeTemp.html",
    controller: "homeCtrl"
  });
  $urlRouterProvider.otherwise("/");//default url which is home
});//closing
