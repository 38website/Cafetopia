angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })





    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })





    .state('findACafe', {
      url: '/findA',
      templateUrl: 'templates/findACafe.html',
      controller: 'findACafeCtrl'
    })





    .state('find', {
      url: '/list',
      templateUrl: 'templates/find.html',
      controller: 'findCtrl'
    })





    .state('find2', {
      url: '/listA',
      templateUrl: 'templates/find2.html',
      controller: 'find2Ctrl'
    })





    .state('cafeX', {
      url: '/cafe1',
      templateUrl: 'templates/cafeX.html',
      controller: 'cafeXCtrl'
    })





    .state('cafeX2', {
      url: '/cafe1A',
      templateUrl: 'templates/cafeX2.html',
      controller: 'cafeX2Ctrl'
    })





    .state('cafeX3', {
      url: '/cafe1B',
      templateUrl: 'templates/cafeX3.html',
      controller: 'cafeX3Ctrl'
    })





    .state('invite', {
      url: '/invite',
      templateUrl: 'templates/invite.html',
      controller: 'inviteCtrl'
    })





    .state('invite2', {
      url: '/inviteA',
      templateUrl: 'templates/invite2.html',
      controller: 'invite2Ctrl'
    })





    .state('alreadyThere?', {
      url: '/already',
      templateUrl: 'templates/already.html',
      controller: 'alreadyThere?Ctrl'
    })





    .state('party', {
      url: '/party',
      templateUrl: 'templates/party.html',
      controller: 'partyCtrl'
    })





    .state('party2', {
      url: '/partyA',
      templateUrl: 'templates/party2.html',
      controller: 'party2Ctrl'
    })





    .state('individual', {
      url: '/solo',
      templateUrl: 'templates/individual.html',
      controller: 'individualCtrl'
    })





    .state('party3', {
      url: '/done',
      templateUrl: 'templates/party3.html',
      controller: 'party3Ctrl'
    })





    .state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })





    .state('food', {
      url: '/food',
      templateUrl: 'templates/food.html',
      controller: 'foodCtrl'
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
