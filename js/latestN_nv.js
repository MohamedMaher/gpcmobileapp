
var app1 = angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate', 'angularjs-datetime-picker']);
 app1.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  })

app1.controller("ctrl1",function($scope,$http,cfpLoadingBar){	
	$scope.start = function() {
      cfpLoadingBar.start();
    };
	
	$scope.currentDate = new Date();
    $scope.year = $scope.currentDate.getFullYear();
    $scope.month = $scope.currentDate.getMonth();
    $scope.day = $scope.currentDate.getDate();
	$scope.mon = $scope.month;
    $scope.mon = $scope.mon + 1;
    //$scope.cDate=$scope.day + "-" + $scope.mon + "-" + $scope.year;
    $scope.cDate = $scope.year + "-" + $scope.mon + "-" + $scope.day;
    $scope.start();
	$http({
			url:"http://gpc.com.eg/larademy/laravel/news",
			method:"post",
			params:{
				"date" : $scope.cDate1}
			}).then(
					function(response){
						if(response.data == "no news in that date"){
							//alert("there is no data in this date");
						}else {
							$scope.resultValues=response.data;
						}
					}
				)
	
});
app1.directive('datetimepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            element.datetimepicker({
                change: function (date) {
                    // Triggers a digest to update your model
                    scope.$apply(function () {
                        ngModelCtrl.$setViewValue(date);
                    });


                }
            });
        }
    }
});

