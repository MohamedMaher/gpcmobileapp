
var app1 = angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate']);

app1.config(function (cfpLoadingBarProvider) {
	cfpLoadingBarProvider.includeSpinner = true;
})

app1.controller("ctrl1", function ($scope, $http, cfpLoadingBar) {

	if (localStorage.getItem("id_field") === null) {

	} else if (localStorage.getItem("id_field") !== null) {
		$http({
			url: "https://gpcnew.com/larademy/laravel/login",
			method: "post",
			params: {
				"empnum": localStorage.getItem("id_field"),
				"password": localStorage.getItem("pass_field")
			}
		}).then(
			function (response) {
				$scope.result = response.data;
				if (localStorage.getItem("lang") == "en") {
					if ($scope.result == "0") {
						alert("ID or Password is invalid..");
					} else {
						localStorage.setItem("e_num",localStorage.getItem("id_field"));
						window.location = "home_en.html";
					}
				} else if (localStorage.getItem("lang") == "ar") {
					if ($scope.result == "0") {
						alert("كلمة المرور او اسم المستخدم خطأ");
					} else {
						localStorage.setItem("e_num",localStorage.getItem("id_field"));
						window.location = "home.html";
					}
				}
			});
	}
	$scope.start = function () {

		if ($(".pass-txt").is(':checked') == 1) {
			localStorage.setItem("id_field", $scope.id);
			localStorage.setItem("pass_field", $scope.pass)
		}

		cfpLoadingBar.start();
	};
	// fake the initial load so first time users can see it right away:
	$scope.checkPass = function () {
		if (angular.element(document.querySelector("#pass"))[0].type == "password") {
			angular.element(document.querySelector("#pass"))[0].type = "text";
		} else if (angular.element(document.querySelector("#pass"))[0].type == "text") {
			angular.element(document.querySelector("#pass"))[0].type = "password";
		}
	}
	$scope.confirmProcess = function () {
		$scope.start();
		//window.location="https://mail.gpc.com.eg/owa/?un='"+$scope.id+"'&pw='"+$scope.password+"'";
		$http({
			url: "https://gpcnew.com/larademy/laravel/login",
			method: "post",
			params: {
				"empnum": $scope.id,
				"password": $scope.pass
			}
		}).then(
			function (response) {
				$scope.result = response.data;
				if (localStorage.getItem("lang") == "en") {
					if ($scope.result == "0") {
						alert("ID or Password is invalid..");
					} else {
						localStorage.setItem("e_num",$scope.id);
						window.location = "home_en.html";
					}
				} else if (localStorage.getItem("lang") == "ar") {
					if ($scope.result == "0") {
						alert("كلمة المرور او اسم المستخدم خطأ");
					} else {
						localStorage.setItem("e_num",$scope.id);
						window.location = "home.html";
					}
				}
			});
	}
	$scope.regProcess = function () {
		if (localStorage.getItem("lang") == "en") {
			window.location = "register_en.html";
		} else if (localStorage.getItem("lang") == "ar") {
			window.location = "register.html";
		}
	}
});

