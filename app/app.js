var myApp = angular.module('app',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home",{
    url: "/",
    templateUrl: "./app/temp/homeTemp.html",
    controller: "homeCtrl"
  });
  $urlRouterProvider.otherwise("/");//default url which is home
});//closing
