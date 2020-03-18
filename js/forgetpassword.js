

var app1 = angular.module("app1", []);

app1.controller("ctrl1", function ($scope) {



	$scope.regProcess = function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/forgetpass",
			method: "POST",
			type: "POST",
			data: {
				"empnum": $scope.un,
			},
			success: function (data) {
				var parsed = JSON.parse(JSON.stringify(data));
				localStorage.setItem("empnum_code",parsed);
				localStorage.setItem("empnum_forget",$scope.un);
				if(localStorage.getItem("lang") == "en"){
					alert("We will send code on your GPC e-mail");
					window.location="sendpassword_en.html";
				}else{
					alert("سوف يتم إرسال كود على البريد الخاص بك فى الشركة");
					window.location="sendpassword.html";
				}
			},
			error: function (msg) {
				alert("Please check your internet connection");
			}
		});
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
