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

var app1 = angular.module("app1", []);

app1.controller("ctrl1", function ($scope, $http) {
    $http({
        url: "https://gpcnew.com/larademy/laravel/showname",
        method: "post",
        params: {
            "empnum": localStorage.getItem("e_num")
        }
    }).then(
        function (response) {
            $scope.un = response.data[0].empname;
        });
});


var app = {
    // Application Constructor
    initialize: function () {

        $(".med_btn").click(function () {
            window.location = "med.html";
        });
        $(".vac_btn").click(function () {
            window.location = "vacation.html";
        });
        $(".info_btn").click(function () {
            window.location = "info.html";
        });
        $(".payroll_btn").click(function () {
            window.location = "payroll.html";
        });
        $(".latest_btn").click(function () {
            window.location = "latestN.html";
        });
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
