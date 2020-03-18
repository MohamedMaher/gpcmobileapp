

 var app1=angular.module("app1",[]);

app1.controller("ctrl1",function($scope){
	
	
	
	$scope.regProcess=function(){
		if(localStorage.getItem("r_code") == $scope.con){
				$.ajax({
					url : "https://gpcnew.com/larademy/laravel/register",
					method : "POST",
					type : "POST",
					data : {
						"empnum" : localStorage.getItem("r_id"),
						"empname":localStorage.getItem("r_un"),
						"email":localStorage.getItem("r_email"),
						"mobile":localStorage.getItem("r_mobile"),
						"password":localStorage.getItem("r_pass")
					},
					success : function(data) {
						if(localStorage.getItem("lang") == "en"){
							alert("Registeration completed")
							window.location="home_en.html";
						}else{
							alert("تم التسجيل بنجاح")
							window.location="home.html";	
						}
					},
					error : function(msg) {
						//alert("Please check your internet connection");
					}
				});
				}else{
					alert("Your code is incorrect ..");
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
