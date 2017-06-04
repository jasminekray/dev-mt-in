angular.module('mainApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('init', {
      url: '/',
      templateUrl: './views/initial.html',
      controller: 'initCtrl'
    })

    .state('friends', {
      url: '/friends',
      templateUrl: './views/friends.html',
      controller: 'friendsCtrl'
    })

    .state('find-friends', {
      url: '/find-friends',
      templateUrl: './views/find-friends.html',
      controller: 'findFriendsCtrl'
    })

    .state('update-profile', {
      url: '/update-profile',
      templateUrl: './views/update-profile.html',
      controller: 'updateProfileCtrl'
    })

    $urlRouterProvider

    .otherwise('/');
  })
