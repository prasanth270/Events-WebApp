var app = angular.module('EventLookUp',['ngAnimate', 'ui.bootstrap']);

app.directive('header', function(){
   return {
       restrict: 'E',
       templateUrl: '/header.ejs'
   };
});

app.directive('sidebar',function(){
  return {
    restrict: 'E',
    templateUrl: '/sidebar.ejs'
  };
});

app.controller('LoginController',['$scope','$uibModal','$http', function($scope,$uibModal,$http){
        //$scope.welcomeTitle = "DashBoard";
        console.log("In Login Controller");
        $scope.loginModal = function(){
            var modalInstance = $uibModal.open({
                  animation: 'true',
                  templateUrl: 'login-popup.ejs',
                  controller: 'LoginModalController'
            });
        };
}]);

app.controller('LoginModalController',['$scope','$uibModalInstance', '$http', '$window',
  function($scope,$uibModalInstance, $http, $window){
    console.log("In Login Modal Controller");
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.login = function(){
        console.log($scope.username);
        var data = { username : $scope.username, password : $scope.password };
        var loginStatus = 'failure';
        $http.post('/checklogin',data).success(function(response){
          console.log('Response is + ' + response);
          if( response === 'success' ){
            $window.location.href = '/home';
            $uibModalInstance.close();
          }
        });
    };
}]);

app.controller('HomeScreenController', ['$scope', function($scope){
  console.log("In Home Screen Controller");
  $scope.homeTitle = 'Dashboard';
  $scope.profileImage = '/images/profile.jpg';
  $scope.values = [
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'},
  {eventImage:'/images/sample.jpg',eventName:'Event Name',eventDescription:'Hello this is dummy and Im happy to be here. Glad to see you getting adjusted in the next line. Totally Appreciate it'}
  ];
}]);

