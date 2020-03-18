/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app1 = angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate']);

app1.config(function (cfpLoadingBarProvider) {
	cfpLoadingBarProvider.includeSpinner = true;
})

app1.controller("ctrl1", function ($scope, $http, cfpLoadingBar) {
	$scope.start = function () {
		cfpLoadingBar.start();
	};

	
	$scope.confirmProcess = function () {
		
		var str = $scope.email;
		var n = str.endsWith("@gpc.com.eg");
		if ($scope.pass === $scope.cpass) {
			if (n) {
				$scope.code = Math.round((Math.random() * 10) * 10000)

				localStorage.setItem("r_code", $scope.code);
				localStorage.setItem("r_id", $scope.id);
				localStorage.setItem("r_un", $scope.un);
				localStorage.setItem("r_email", $scope.email);
				localStorage.setItem("r_mobile", $scope.mobile);
				localStorage.setItem("r_pass", $scope.pass);


				$scope.start();
				$http({
					url: "https://gpcnew.com/larademy/laravel/confirm",
					method: "post",
					params: {
						"email": $scope.email,
						"empnum": $scope.id,
						"mobile": $scope.mobile,
						"token": $scope.code
					}
				}).then(
					function (data) {
						var result = JSON.parse(JSON.stringify(data));
						if (localStorage.getItem("lang") == "en") {
							if (result == "this ID is Already registered") {
								alert("this ID is Already registered");
							} else if (result == "this email is Already registered") {
								alert("this email is Already registered");
							} else if (result == "this mobile is already registered") {
								alert("this mobile is already registered");
							} else {
								window.location = "chome_en.html";
							}
						} else {
							if (result == "this ID is Already registered") {
								alert("لقد تم إدخال الرقم من قبل");
							} else if (result == "this email is Already registered") {
								alert("لقد تم إدخال هذا البريد الإلكترونى");
							} else if (result == "this mobile is already registered") {
								alert("لقد تم إدخال هذا الرقم من قبل");
							} else {
								window.location = "chome.html";
							}
						}
					}
				)

				// $.ajax({
				// 	url: "https://gpcnew.com/larademy/laravel/confirm",
				// 	method: "POST",
				// 	type: "POST",
				// 	data: {
				// 		"email": $scope.email,
				// 		"empnum": $scope.id,
				// 		"mobile": $scope.mobile,
				// 		"token": $scope.code
				// 	},
				// 	success: function (data) {
				// 		var result = JSON.parse(JSON.stringify(data));
				// 		if (localStorage.getItem("lang") == "en") {
				// 			if (result == "this ID is Already registered") {
				// 				alert("this ID is Already registered");
				// 			} else if (result == "this email is Already registered") {
				// 				alert("this email is Already registered");
				// 			} else if (result == "this mobile is already registered") {
				// 				alert("this mobile is already registered");
				// 			} else {
				// 				window.location = "chome_en.html";
				// 			}
				// 		} else {
				// 			if (result == "this ID is Already registered") {
				// 				alert("لقد تم إدخال الرقم من قبل");
				// 			} else if (result == "this email is Already registered") {
				// 				alert("لقد تم إدخال هذا البريد الإلكترونى");
				// 			} else if (result == "this mobile is already registered") {
				// 				alert("لقد تم إدخال هذا الرقم من قبل");
				// 			} else {
				// 				window.location = "chome.html";
				// 			}
				// 		}
				// 	},
				// 	error: function (msg) {
				// 		alert("Please check your internet connection");
				// 	}
				// });
			} else {
				alert("برجاء إدخال الميل الخاص بالشركة");
			}
		} else { alert("برجاءإدخال كلمةالمرور صحيحة "); }
	}
});

var app = {
	// Application Constructor
	initialize: function () {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function () {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function () {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function (id) {
		
	}
};
