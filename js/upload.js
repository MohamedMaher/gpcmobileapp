$(function () {
	$('.submit-btn').click(function () {

		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/gpn",
			method: "POST",
			type: "POST",
			data: {
				"date": $('.date_data').val(),
				"category": $('.cat_data').val(),
				"title": $('.title_data').val(),
				"body": $('.body_data').val(),
				"img": $('.img_data').val(),
			},
			success: function (data) {
				sessionStorage.setItem('img_id', data[0].id);
				$('.u_tab').attr("style", "opacity:1;pointer-events:painted");
			},
			error: function (msg) { }
		});
	});

	$('.insert-btn').click(function () {
		var formData = new FormData();
		formData.append("id", sessionStorage.getItem("img_id"));
		formData.append("pic", $('input[type=file]')[0].files[0]);
		
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/gpcnews_img",
			method: "POST",
			dataType: "text",
			ContentType: "image/*",
			type: "POST",
			data: formData,
			contentType: false,
			processData: false,
			success: function (data) {
				alert("Image Inserted...");
			},
			error: function (msg) { }
		});
	});
});