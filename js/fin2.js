$(function () {

	$.ajax({
		url: "https://gpcnew.com/larademy/laravel/busarea",
		method: "POST",
		type: "POST",
		data: {
		},
		success: function (data) {
			$('.area').append('<option disabled selected>أختر المنطقة</option>');
			for (x in data) {
				$('.area').append('<option value=' + data[x].area + '>' + data[x].area + '</option>');
			}
		},
		error: function (msg) { }
	});

	$(".area").on("change", function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/transport",
			method: "POST",
			type: "POST",
			data: {
				"area": $(".area :selected").text(),
				"type": $(".empl :selected").val(),
			},
			success: function (data) {
				$('.table-data').empty();

				$('.table-data').append(`<tr style="color:white;border:none;"><td style="color:white;border:none;">
				الخط
			</td>
			<td style="color:white;border:none;text-align:center">
				اسم المشرف
			</td>
			<td style="color:white;border:none;text-align:center">
				رقم التليفون
			</td></tr>`);
				for (x in data) {
					$('.table-data').append(`<tr style="color:white;border:none;"><td style="color:white;border:none;">
					<h6>`+parsed[x].area+`</h6>
				</td>
				<td style="color:white;border:none;text-align:center">
					اسم المشرف
				</td>
				<td style="color:white;border:none;text-align:center">
					رقم التليفون
				</td></tr>`);
				}
			},
			error: function (msg) { }
		});
	});
	$(".empl").on("change", function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/transport",
			method: "POST",
			type: "POST",
			data: {
				"area": $(".area :selected").text(),
				"type": $(".empl :selected").val(),
			},
			success: function (data) {
				$('.table-data').empty();

				$('.table-data').append(
					`<tr style="color:white;border:none;">
						<td style="color:white;border:none;">
							الخط
						</td>
						<td style="color:white;border:none;text-align:center">
							اسم المشرف
						</td>
						<td style="color:white;border:none;text-align:center">
							رقم التليفون
						</td>
					</tr>`
				)
				for (x in data) {
					$('.table-data').append(`<tr style="color:white;border:none;"><td style="color:white;border:none;">
					<h6>`+data[x].name+`</h6>
				</td>
				<td style="color:white;border:none;text-align:center">
				<h6>`+data[x].leader+`</h6>
				</td>
				<td style="color:white;border:none;text-align:center">
					<a style="color:white;text-decoration:none;" href="tel:0`+data[x].mobile+`" target="_blank">0`+data[x].mobile+`</a>
				</td></tr>`);
				}
			},
			error: function (msg) { }
		});
	});

	$('.submit-btn').click(function () {

	});

});