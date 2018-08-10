var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider,$locationProvider){

    $locationProvider.hashPrefix('');
    $routeProvider.when('/sobre',{
        controller: 'sobreCtrl',
        templateUrl: 'pages/sobre.html'
    });

    $routeProvider.when('/cadastro',{
        controller: 'cadastroCtrl',
        templateUrl: 'pages/cadastro.html'
    });

    $routeProvider.when('/home',{
        controller: 'homeCtrl',
        templateUrl: 'pages/home.html'
    });
});
app.controller('homeCtrl',function($scope){
    $scope.message = "Home page";
});

app.controller('sobreCtrl',function($scope){
    $scope.message = "sobre";
});

app.controller('cadastroCtrl',function($scope){
    $scope.message = "cadastro";
});