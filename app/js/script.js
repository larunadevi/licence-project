
var app = angular.module('myapp', [])
  .controller('HobbyCtrl', function ($scope){
    $scope.persons = [
      {"name": "SecureLock3GPslyShields", "provider": "Blackberry","description": "ChatApplication"},
      {"name": "DEBPSMS", "provider": "Blackberry","description": "DEBP Sms Plugin"},
      {"name": "DEBPEMAIL", "provider": "Blackberry","description": "DEBP Email Plugin"},
      {"name": "DEBP BBM", "provider": "Blackberry","description": "DEBP BBM"},

    ];

  })
  .controller('ProductCtrl', function ($scope){
    $scope.lists = [
      {"macaddress": "192.15.15.68", "holder": "Thomson","issuer": "Mobilecrypto","goodafter": "2016-9-20 00.00.00","goodbefore": "2016-9-20 00.00.00","licence":"1"},
      {"macaddress": "192.15.15.68", "holder": "Gerome","issuer": "Mobilecrypto","goodafter": "2016-9-20 00.00.00","goodbefore": "2016-9-20 00.00.00","licence":"2"},
    ];

  })
  .controller('LicenceCtrl', function ($scope){
    $scope.lists = [
      {"name": "Thodoris", "provider": "Gym","description": "ChatApplication"},
      {"name": "George", "provider": "Fishing","description": "DEBP Sms Plugin"},
      {"name": "Thodoris", "provider": "Gym","description": "ChatApplication"},
      {"name": "George", "provider": "Fishing","description": "DEBP Sms Plugin"},
    ];

  });
$(function(){
  var now2 = new Date();
  // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  // Saturday, June 9th, 2007, 5:46:21 PM
  $('.date').html(''+now2);
});
