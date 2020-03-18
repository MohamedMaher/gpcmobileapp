

var app1 = angular.module("app1", []);

app1.controller("ctrl1", function ($scope) {



	$scope.regProcess = function () {
		if (localStorage.getItem("empnum_code") == $scope.cod) {
			if ($scope.pas === $scope.cpas) {
				$.ajax({
					url: "https://gpcnew.com/larademy/laravel/changepass",
					method: "POST",
					type: "POST",
					data: {
						"code": localStorage.getItem("empnum_code"),
						"empnum":localStorage.getItem("empnum_forget"),
						"password":$scope.pas
					},
					success: function (data) {
						var parsed = JSON.parse(JSON.stringify(data));
						alert(parsed);
						if(localStorage.getItem("lang") == "en"){
							window.location="siginin_en.html";
						}else{
							window.location="siginin.html";
						}
					},
					error: function (msg) {
						alert("Please check your internet connection");
					}
				});
			} else {
				alert("كلمة المرور غير متطبقة");
			}
		} else {
			alert("الكود غير صحيح");
		}
	}

});
/*$(document).ready(function(){
	document.addEventListener('deviceready',function(){


			alert('calling push init');
			var push = PushNotification.init({
				"android": {"senderID": "564354957282"},
				"browser": {},
				"ios": {"sound": true,"vibration": true,"badge": true},
				"windows": {}
			});
			push.on('registration', function(data) {
				alert('registration event: ' + data.registrationId);
				$.ajax({
				url : "https://gpcnew.com/larademy/laravel/device",
				method : "POST",
				type : "POST",
				data : {
					"deviceid" : data.registrationId
				},
				success : function(data) {
					var arr_id = [];
					var parsed = JSON.parse(JSON.stringify(data));
					for (var x in parsed) {
						arr_id.push(parsed[x].id);
					}
					alert("aaa");
				},
				error : function(msg) {
					alert("123");
				}
			});
			});

			push.on('error', function(e) {
				alert("push error = " + e.message);
			});

			push.on('notification', function(data) {
				navigator.notification.alert(
					data.message,         // message
					null,                 // callback
					data.title,           // title
					'Ok'                  // buttonName
				);
		   });
		}, false);
});*/
