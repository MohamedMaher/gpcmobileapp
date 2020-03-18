$(function () {
	$('.submit-btn').click(function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/hr",
			method: "POST",
			type: "POST",
			data: {
				"empnum": localStorage.getItem('e_num'),
				"type": $('.area :selected').val(),
				"lang": $('.area2 :selected').val(),
				"to": $('.hr-txt').val()
			},
			success: function (data) {
				alert("تم الارسال");
			},
			error: function (msg) { }
		});
	});

});