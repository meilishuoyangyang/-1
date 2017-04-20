angular.module("meilishuo",["ui.router","angularCSS",'homeModule','categoryModule','shopcarModule','mineModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})