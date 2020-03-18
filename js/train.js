 var app1=angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate']);

 app1.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  })
app1.controller("ctrl1",function($scope,$http,cfpLoadingBar){
	$scope.start = function() {
      cfpLoadingBar.start();
    };
	$scope.selected=function(item){
		$scope.start();
		$http({
			url:"https://gpcnew.com/larademy/laravel/training",
			method:"post",
			params:{"type" :item }
			}).then(
					function(response){
						$scope.resultValues=response.data;
					}
				)
	}
});
 
