var app = angular.module('EventLookUp',['ngAnimate', 'ui.bootstrap','angularjs-dropdown-multiselect'
  ,'ngMaterial','ngMessages','file-upload']);

app.directive('header', function(){
   return {
       restrict: 'E',
       templateUrl: '/header.ejs'
   };
});

app.directive('headerFiles',function () {
   return {
      restrict: 'E',
      templateUrl: '/header-files.ejs'
   };
});

app.directive('sidebar',function(){
  return {
    restrict: 'E',
    templateUrl: '/sidebar.ejs'
  };
});

app.directive('imageSlider',function () {
   return {
    restrict: 'E',
    templateUrl: '/image-slider.ejs'
   };
});

app.controller('LoginController',['$scope','$uibModal','$http', function($scope,$uibModal,$http){
        //$scope.welcomeTitle = "DashBoard";
        $scope.button2 = "Log In";
        //$scope.onClickFunc = "loginModal()";
        console.log("In Login Controller");
        $scope.b2onClickFunc = function(){
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

app.controller('HomeScreenController', ['$scope','$window', function($scope,$window){
  console.log("In Home Screen Controller");
  $scope.button2 = "Create Event";
  //$scope.onClickFunc = "createEvent()";
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

  $scope.b2onClickFunc = function () {
     console.log("On Click Create Event");
     $window.location.href = '/createEvent';
  };

}]);

app.controller('CarouselCtrl', function($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 1020 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/250',
      text: ['Nice image', 
      'Awesome photograph', 
      'That is so cool', 
      'I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    console.log(i);
    $scope.addSlide();
  }
});

app.controller('CreateEventCtrl',['$scope',function($scope){
    $scope.button2hide = 'true';
    $scope.title = 'Create Event';
    $scope.eventcategorymodel = [];
    $scope.eventcategorydata = [
    {id: 1, label: "Only SJSU", category: 'A'},
    {id: 2, label: "All Schools", category: 'A'},
    {id: 3, label: "public", category: 'A'},
    {id: 4, label: "IEEE", category: 'B'},
    {id: 5, label: "Subway", category: 'C'},
    {id: 6, label: "Meeting #4", category: 'C'},
    {id: 7, label: "Eng189", category: 'B'}
    ];
    $scope.eventcategorysettings = {
        groupByTextProvider: function(category) {
            if (category === 'A') {
                return 'Library Event';
            } else if(category === 'B') {
                return 'University Event';
            } else {
                return 'Student Event';
            }
        },
        scrollableHeight: '200px',
        scrollable: true
    };
    $scope.eventlocationmodel=[];
    $scope.eventlocationdata = [
        {id:1, label:"SU Ballroom",location:'A'},
        {id:2, label:"Auditorium",location:'A'},
        {id:3, label:"South Road",location:'B'},
        {id:4, label:"South Camp",location:'B'},
        {id:5, label:"7th Street",location:'C'},
        {id:6, label:"10th Street",location:'C'},
        {id:7, label:"King Library",location:'A'}
    ];
    $scope.eventlocationsettings = {
        groupByTextProvider: function(location){
            if(location === 'A')
                return 'SJSU Main Campus';
            else if (location === 'B')
                return 'SJSU South Campus';
            else
                return 'Off Campus';
        },
        scrollableHeight: '200px',
        scrollable: true
    };
    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 0,
        $scope.myDate.getDate()
    );
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 12,
        $scope.myDate.getDate()
    );
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.ismeridian = true;
    $scope.changed = function () {
      $log.log('Time changed to: ' + $scope.mytime);
    };
    $scope.clear = function() {
      $scope.mytime = null;
    };

    $scope.doUpload = function(){
        console.log('title',$scope.title);
        console.log('uploadFile',$scope.uploadFile);
        alert('Do upload. See console for data');
        /*
        //create form data object
        var fd = new FormData();
        fd.append('title',$scope.title);
        fd.append('file', $scope.uploadFile);
        //send the file / data to your server
        $http.post('/file/upload/path', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
            //do something on success
        }).error(function(err){
            //do something on error
        })
        */
    }


}]);












