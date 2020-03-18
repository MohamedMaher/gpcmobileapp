$(function () {
	$.ajax({
		url: "https://gpcnew.com/larademy/laravel/city",
		method: "POST",
		type: "POST",
		success: function (data) {
			$('.area').append('<option disabled selected>أختر المنطقة</option>');
			for (x in data) {
				$('.area').append('<option value=' + data[x].name + '>' + data[x].name + '</option>');
			}
		},
		error: function (msg) { }
	});
	
});