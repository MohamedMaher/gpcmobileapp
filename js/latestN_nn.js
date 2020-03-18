
 var app1=angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate']);

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
	
	//$scope.year = "2017";
    //$scope.month = 4;
    //$scope.day = "15";
	
	//alert($scope.cDate);
	
    $scope.mon = $scope.month;
    $scope.mon = $scope.mon + 1;
	
    $scope.cDate=$scope.day + "-" + $scope.mon + "-" + $scope.year;
	
	//var dateField=$scope.currentDate;
	
	//dateField=dateField.subString(0,10);
	
	//alert($scope.dateField);
	
    $scope.cDate1=$scope.year + "-" + $scope.mon + "-" + $scope.day;

	
	
	$scope.start();
	$http({
			url:"https://gpcnew.com/larademy/laravel/petnews",
			method:"post",
			params:{
				"date" : $scope.cDate1}
			}).then(
					function(response){
						if(response.data == "no news in that date"){
							$(".ss").empty();
							$(".ss").append("<h4>لا يوجد أخبار فى هذا اليوم</h4>");
						}else {
							$(".ss").empty();
							$scope.resultValues=response.data;
						}
					}
				)
	
	$scope.pre=function(){
		$scope.resultValues="";
		$scope.start();
		if ($scope.day <= 1) {
            $scope.mon = $scope.mon - 1;
			if ($scope.mon < 1) {
				$scope.year = $scope.year - 1;
				$scope.mon = 12;
				$scope.day = 30;
			}
            $scope.day = 30;
        }else if($scope.day > 1){
			$scope.day = $scope.day - 1;
		}
		$scope.cDate=$scope.day + "-" + $scope.mon + "-" + $scope.year;
		$scope.cDate1=$scope.year + "-" + $scope.mon + "-" + $scope.day;
		$http({
			url:"https://gpcnew.com/larademy/laravel/petnews",
			method:"post",
			params:{
				"date" : $scope.cDate1}
			}).then(
					function(response){
						if(response.data == "no news in that date"){
							$(".ss").empty();
							$(".ss").append("<h4>لا يوجد أخبار فى هذا اليوم</h4>");
						}else {
							$(".ss").empty();
							$scope.resultValues=response.data;
						}
					}
				)
	}
	$scope.next=function(){
		$scope.resultValues="";
		$scope.start();
		if ($scope.day >= 30) {
            $scope.mon = $scope.mon + 1;
			if ($scope.mon > 12) {
				$scope.year = $scope.year + 1;
				$scope.mon = 1;
				$scope.day = 1;
			}
            $scope.day = 1;
        }else if($scope.day < 30){
			$scope.day = $scope.day + 1;
		}
		$scope.cDate=$scope.day + "-" + $scope.mon + "-" + $scope.year;
		$scope.cDate1=$scope.year + "-" + $scope.mon + "-" + $scope.day;
		$http({
			url:"https://gpcnew.com/larademy/laravel/petnews",
			method:"post",
			params:{
				"date" : $scope.cDate1}
			}).then(
					function(response){
						if(response.data == "no news in that date"){
							$(".ss").empty();
							$(".ss").append("<h4>لا يوجد أخبار فى هذا اليوم</h4>");
						}else {
							$(".ss").empty();
							$scope.resultValues=response.data;
						}
					}
				)
	}
});


