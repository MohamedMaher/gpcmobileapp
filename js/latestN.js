
var app1 = angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate']);

app1.config(function (cfpLoadingBarProvider) {
	cfpLoadingBarProvider.includeSpinner = true;
})
var zoomin = 1;
app1.filter('trusted', ['$sce', function ($sce) {
	return function (url) {
		return $sce.trustAsResourceUrl(url);
	};
}]);
app1.controller("ctrl1", function ($scope, $http, cfpLoadingBar) {
	$scope.start = function () {
		cfpLoadingBar.start();
		$('body').on('click', '.zoomin', function () {
			zoomin = zoomin + 0.25;
			$(".imgg").css("transform", "scale(" + zoomin + ")");
		});
		$('body').on('click', '.zoomout', function () {
			zoomin = zoomin - 0.25;
			$(".imgg").css("transform", "scale(" + zoomin + ")");
		});
	};
	$scope.currentDate = new Date();
	$scope.year = $scope.currentDate.getFullYear();
	$scope.month = $scope.currentDate.getMonth();
	$scope.day = $scope.currentDate.getDate();

	$scope.mon = $scope.month;
	$scope.mon = $scope.mon + 1;


	// $scope.cDate = $scope.day + "-" + $scope.mon + "-" + $scope.year;
	// $scope.cDate1 = $scope.year + "-" + $scope.mon + "-" + $scope.day;

	$scope.cDate = $scope.mon + "-" + $scope.year;
	$scope.cDate1 = $scope.year + "-" + $scope.mon;


	$scope.start();
	$http({
		url: "https://gpcnew.com/larademy/laravel/news",
		method: "post",
		params: {
			"date": $scope.cDate1
		}
	}).then(
		function (response) {
			if (response.data == "no news in that date") {
				$(".ss").empty();
				$(".ss").append("<h4>لا يوجد أخبار فى هذا الشهر</h4>");
			} else {
				$(".ss").empty();
				$scope.resultValues = response.data;
				
			}
		}
	)


	// for (var inde = 0; inde < $scope.resultValues.length; inde++) {
	// 				$http({
	// 					url: "https://gpcnew.com/larademy/laravel/news_img",
	// 					method: "post",
	// 					params: {
	// 						"id": $scope.resultValues[inde].id
	// 					}
	// 				}).then(
	// 					function (response2) {
	// 						if (response2.data == "no images in that title") {

	// 						} else {
	// 							$(".ss").empty();
	// 							$scope.resultValues2 = response2.data;
	// 						}
	// 					}
	// 				)
	// 			}

	$scope.shD = function (i) {
		$http({
			url: "https://gpcnew.com/larademy/laravel/news_img",
			method: "post",
			params: {
				"id": i
			}
		}).then(
			function (response2) {
				if (response2.data == "no images in that title") {

				} else {
					$(".ss").empty();
					$scope.resultValues2 = response2.data;
				}
			}
		)
	}
	$scope.pre = function () {
		$scope.resultValues = "";
		$scope.start();
		$scope.mon = $scope.mon - 1;
		if ($scope.mon < 1) {
			$scope.year = $scope.year - 1;
			$scope.mon = 12;
			$scope.day = 30;
		}
		$scope.cDate = $scope.mon + "-" + $scope.year;
		$scope.cDate1 = $scope.year + "-" + $scope.mon;

		$http({
			url: "https://gpcnew.com/larademy/laravel/news",
			method: "post",
			params: {
				"date": $scope.cDate1
			}
		}).then(
			function (response) {
				if (response.data == "no news in that date") {
					$(".ss").empty();
					$(".ss").append("<h4>لا يوجد أخبار فى هذا الشهر</h4>");
				} else {
					$(".ss").empty();
					$scope.resultValues = response.data;
					$http({
						url: "https://gpcnew.com/larademy/laravel/news_img",
						method: "post",
						params: {
							"title_id": $scope.id
						}
					}).then(
						function (response2) {
							if (response2.data == "no images in that title") {

							} else {
								$(".ss").empty();
								$scope.resultValues2 = response2.data;
							}
						}
					)
				}
			}
		)
	}
	// $scope.getImg = function () {

	// 	//alert($(this).attr('data-model'));
	// 	$http({
	// 		url: "https://gpcnew.com/larademy/laravel/news",
	// 		method: "post",
	// 		params: {
	// 			"title_id": $(this).attr("data-id")
	// 		}
	// 	}).then(
	// 		function (response) {
	// 			if (response.data == "no images in that title") {

	// 			} else {
	// 				$(".ss").empty();
	// 				$scope.resultValues = response.data;
	// 			}
	// 		}
	// 	)
	// }
	$scope.next = function () {
		$scope.resultValues = "";
		$scope.start();
		// if ($scope.day >= 30) {
		// 	$scope.mon = $scope.mon + 1;
		// 	if ($scope.mon > 12) {
		// 		$scope.year = $scope.year + 1;
		// 		$scope.mon = 1;
		// 		$scope.day = 1;
		// 	}
		// 	$scope.day = 1;
		// } else if ($scope.day < 30) {
		// 	$scope.day = $scope.day + 1;
		// }
		// $scope.cDate = $scope.day + "-" + $scope.mon + "-" + $scope.year;
		// $scope.cDate1 = $scope.year + "-" + $scope.mon + "-" + $scope.day;



		$scope.mon = $scope.mon + 1;
		if ($scope.mon > 12) {
			$scope.year = $scope.year + 1;
			$scope.mon = 1;
			$scope.day = 1;
		}

		$scope.cDate = $scope.mon + "-" + $scope.year;
		$scope.cDate1 = $scope.year + "-" + $scope.mon;
		$http({
			url: "https://gpcnew.com/larademy/laravel/news",
			method: "post",
			params: {
				"date": $scope.cDate1
			}
		}).then(
			function (response) {
				if (response.data == "no news in that date") {
					$(".ss").empty();
					$(".ss").append("<h4>لا يوجد أخبار فى هذا الشهر</h4>");
				} else {
					$(".ss").empty();
					$scope.resultValues = response.data;
				}
			}
		)
	}
});


