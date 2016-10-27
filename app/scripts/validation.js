$scope.$watch('model.Template.StartDate', validateDates);
$scope.$watch('model.Template.EndDate', validateDates);
 
function validateDates() {
    if (!$scope.model) return;
    if ($scope.form.startDate.$error.invalidDate || $scope.form.endDate.$error.invalidDate) {
        $scope.form.startDate.$setValidity("endBeforeStart", true);  //already invalid (per validDate directive)
    } else {
        //depending on whether the user used the date picker or typed it, this will be different (text or date type).  
        //creating a new date object takes care of that.  
        var endDate = new Date($scope.model.Template.EndDate);
        var startDate = new Date($scope.model.Template.StartDate);
        $scope.form.startDate.$setValidity("endBeforeStart", endDate >= startDate);
    }
}
console.log('user name : ' + $scope.userfullName);
console.log('issuer: ' + $scope.issuer);
console.log('user address: ' + $scope.useraddress);
        console.log('user email : ' +$scope.useremail);
        console.log('user password :' +$scope.userpassword);
		console.log('holder :' +$scope.holder);
		console.log('securelock :' +$scope.securelock);
		console.log('debpsms :' +$scope.debpsms);
		console.log('debpemail :' +$scope.debpemail);
		console.log('debpbbm :' +$scope.debp-bbm);
		console.log('securemessage :' +$scope.securemessage);
		console.log('paltform :' +$scope.platform);
		console.log('description :' +$scope.description);
		