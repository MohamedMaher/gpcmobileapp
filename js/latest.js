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
 
 var app1=angular.module("app1",[]);

app1.controller("ctrl1",function($scope,$http){
	var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
	
    var mon = month;
    mon = mon + 1;
    $(".datecu").html(day+ ' - ' + (mon) + ' - ' + year);
    
	$(".next").click(function () {		
		if (day >= 30) {
            mon = mon + 1;
			if (mon > 12) {
				year = year + 1;
				mon = 1;
				day = 1;
			}
            day = 1;
        }else if(day < 30){
			day = day + 1;
		}
		$(".datecu").html(day+ ' - ' +(mon) + ' - ' + year);
    });
    $(".priv").click(function () {
		
       if (day <= 1) {
            mon = mon - 1;
			if (mon < 1) {
				year = year - 1;
				mon = 12;
				day = 30;
			}
            day = 30;
        }else if(day > 1){
			day = day - 1;
		}
		$(".datecu").html(day+ ' - ' + (mon) + ' - ' + year);
    });
	
	$http({
			url:"https://gpcnew.com/larademy/laravel/news",
			method:"post",
			params:{
				"date" : "2017-05-15"}
			}).then(
					function(response){
						$scope.result=response.data;
						for (dat in $scope.result){
							//alert($scope.result[dat].id);
							//alert($scope.result[dat].date);
							//alert($scope.result[dat].category);
							//alert($scope.result[dat].title);
							//alert($scope.result[dat].body);
						}
						/*$scope.result=response.data;
						if($scope.result == "0"){
							alert("ID or Password is invalid..");
						}else{
							window.location="home.html";
						}*/
					}
				)
	
	$scope.checkPass=function(){
		if(angular.element(document.querySelector("#pass"))[0].type == "password"){
			angular.element(document.querySelector("#pass"))[0].type = "text";
		}else if(angular.element(document.querySelector("#pass"))[0].type == "text"){
			angular.element(document.querySelector("#pass"))[0].type = "password";
		}
	}
	$scope.confirmProcess=function(){
		$http({
			url:"https://gpcnew.com/larademy/laravel/news",
			method:"post",
			params:{
				"date":"2017-05-15"}
			}).then(
					function(response){
						$scope.r=response.data;
						var parsed = JSON.parse(JSON.stringify($scope.r));
						alert(parsed);
						
					}
				)
	}
	$scope.regProcess=function(){
		window.location="register.html";
	}
});
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		
		
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};
