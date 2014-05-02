'use strict';
angular.module('WowApp.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Pete', id: 1 },
    { title: 'Jim', id: 2 },
    { title: 'Dan', id: 3 },
    { title: 'Eddy', id: 4 },
    { title: 'Shaun', id: 5 },
    { title: 'Fred', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
