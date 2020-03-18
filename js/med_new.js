$(function () {
	//$('.import-btn').click(function(){
	// $.ajax({
	// 	url: "https://gpcnew.com/larademy/laravel/med_gover",
	// 	method: "POST",
	// 	type: "POST",
	// 	data: {
	// 		"code": "1110",
	// 		"name":"hospital"
	// 	},
	// 	success: function (data) {

	// 	},
	// 	error: function (msg) { }
	// });

	//});
	// $.ajax({
	// 	url: "https://gpcnew.com/larademy/laravel/med_data",
	// 	method: "POST",
	// 	type: "POST",
	// 	data: {
	// 		"city_code": "1110",
	// 		"type":"hospital"
	// 	},
	// 	success: function (data) {

	// 	},
	// 	error: function (msg) { }
	// });
	$.ajax({
		url: "https://gpcnew.com/larademy/laravel/cl_gover",
		method: "POST",
		type: "POST",
		success: function (data) {
			$('.gover').append('<option disabled selected>أختر المحافظة</option>');
			for (x in data) {
				$('.gover').append('<option value=' + data[x].CODE + '>' + data[x].NAME + '</option>');
			}
		},
		error: function (msg) { }
	});
	$('.gover').change(function () {
		$('.type').attr("style", "pointer-events:painted;opacity:1;");

		$('.city').html('');
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/cl_city",
			method: "POST",
			type: "POST",
			data: {
				"gov_code": $('.gover').val()
			},
			success: function (data) {
				$('.city').append('<option disabled selected>أختر المدينة</option>');
				for (x in data) {
					$('.city').append('<option value=' + data[x].CODE + '>' + data[x].NAME + '</option>');
				}
			},
			error: function (msg) { }
		});
	});
	$('.type').change(function () {
		if ($('.type').val() === "DOCTOR") {
			$.ajax({
				url: "https://gpcnew.com/larademy/laravel/cl_specialist",
				method: "POST",
				type: "POST",
				success: function (data) {
					$('.spec').append('<option disabled selected>أختر تخصص</option>');
					for (x in data) {
						$('.spec').append('<option value=' + data[x].CODE_SPECI + '>' + data[x].NAME_SPECI + '</option>');
					}
				},
				error: function (msg) { }
			});
			$('.spec_row').css("display", "table-row");

		}
	});

	$('.submit-btn').click(function(){
		window.sessionStorage.setItem('city',$('.city').val());
		window.sessionStorage.setItem('type',$('.type').val());
		if($('.type').val() == "DOCTOR"){
			window.sessionStorage.setItem('spec',$('.spec').val());
		}else{
			window.sessionStorage.setItem('spec',"");
		}
		window.location="med_data.html";
	});

});