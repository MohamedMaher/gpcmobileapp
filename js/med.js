
 var app1=angular.module("app1", ['chieffancypants.loadingBar', 'ngAnimate']);

 app1.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  })
  
app1.controller("ctrl1",function($scope,$http,cfpLoadingBar){
	
	$scope.start = function() {
	    cfpLoadingBar.start();


	    var carousel = $(".carousel"),
    currdeg = 0;

	    $(".next").on("click", { d: "n" }, rotate);
	    $(".prev").on("click", { d: "p" }, rotate);

	    function rotate(e) {
	        if (e.data.d == "n") {
	            currdeg = currdeg - 60;
	        }
	        if (e.data.d == "p") {
	            currdeg = currdeg + 60;
	        }
	        carousel.css({
	            "-webkit-transform": "rotateY(" + currdeg + "deg)",
	            "-moz-transform": "rotateY(" + currdeg + "deg)",
	            "-o-transform": "rotateY(" + currdeg + "deg)",
	            "transform": "rotateY(" + currdeg + "deg)"
	        });
	    }

    };
	
$scope.med="dd";
$scope.start();	

// GOVER
$http({
	url:"https://gpcnew.com/larademy/laravel/gover",
	method:"post"
	}).then(
			function(response){
				$scope.resultValuesGover=response.data;
			}
		)

		$scope.selected=function(item){
			$scope.start();
$http({
	url:"https://gpcnew.com/larademy/laravel/city",
	method:"post",
	params:{"gov_code" :item }
	}).then(
			function(response){
				$scope.resultValuesCity=response.data;
			}
		)
}






	$http({
			url:"https://gpcnew.com/larademy/laravel/specialist",
			method:"post"
			}).then(
					function(response){
						$scope.resultValues=response.data;
					}
				)
				
				$scope.selected=function(item){
					$scope.start();
		$http({
			url:"https://gpcnew.com/larademy/laravel/doctors",
			method:"post",
			params:{"code" :item }
			}).then(
					function(response){
						$scope.resultValues2=response.data;
					}
				)
	}
});
 

/*$.ajax({
			url : "https://gpcnew.com/larademy/laravel/doctors",
			method : "POST",
			type : "POST",
			data : {
				code:$('#brand').val()
			},
			success : function(data) {
				var parsed = JSON.parse(JSON.stringify(data));
				for (var x in parsed) {
					$('#brand').append($('<option>',{value:parsed[x].specialist_code,text:parsed[x].specialist_name}));
				}
			},
			error : function(msg) {
				
			}
		});*/

