$(function () {
	var title = "";
	var value = 0;
	var escort = "";

	$(".area").on("change", function () {
		switch ($(".area").val()) {
			case "مرتب":
				title = "مرتب";
				$('.explain-description').removeClass('disab');
				$('.e-d').html(`سلفة من دفعة المرتب`);
				$('.ss').addClass('haj-controls');
				$('.sss').removeClass('val-controls');
				break;
			case "حافز":
				title = "حافز";
				$('.explain-description').removeClass('disab');
				$('.ss').addClass('haj-controls');
				$('.sss').removeClass('val-controls');
				$('.e-d').html(`سلفة من دفعة الحافز`);
				break;
			case "عمرة":
				title = "عمرة";
				$('.explain-description').removeClass('disab');
				$('.ss').removeClass('haj-controls');
				$('.sss').addClass('val-controls');
				$('.e-d').html(`سلفة العمرة للفرد 15000 جنية`);
				break;
			case "حج":
				title = "حج";
				$('.explain-description').removeClass('disab');
				$('.ss').removeClass('haj-controls');
				$('.sss').addClass('val-controls');
				$('.e-d').html(`سلفة الحج للفرد 30000 جنية`);
				break;
			case "مناسبات":
				title = "مناسبات";
				$('.explain-description').removeClass('disab');
				$('.sss').addClass('val-controls');
				$('.ss').addClass('haj-controls');
				$('.e-d').html(`أرجو من سيادتكم بالموافقة على إعطائى سلفة قدرها 8000 جنية (فقط ثمانية ألاف جنيةلا غير) تخصم طبقا للقواعد المتبعةفى نظام
			سلفة الشركةوذلك نظراً لظروف طارئة`);
				break;
		}
	});

	$('.submit-btn').click(function () {
		value = 0;
		escort = "";
		if ($('.part').is(':checked')) {
			escort = "-موظف";
		}
		switch (title) {
			case "مرتب":
				$.ajax({
					url: "https://gpcnew.com/larademy/laravel/adjust",
					method: "POST",
					type: "POST",
					data: {
						"empnum": localStorage.getItem('e_num'),
						"type": "مرتب",
						"value": $(".value-txt").val(),
						"escort": $('.escort :selected').val()+escort
					},
					success: function (data) {
						alert("تم الارسال");
					},
					error: function (msg) { }
				});
				break;
			case "حافز":
				$.ajax({
					url: "https://gpcnew.com/larademy/laravel/adjust",
					method: "POST",
					type: "POST",
					data: {
						"empnum": localStorage.getItem('e_num'),
						"type": "حافز",
						"value": $(".value-txt").val(),
						"escort": $('.escort :selected').val()+escort
					},
					success: function (data) {
						alert("تم الارسال");
					},
					error: function (msg) { }
				});
				break;
			case "عمرة":
			$.ajax({
				url: "https://gpcnew.com/larademy/laravel/adjust",
				method: "POST",
				type: "POST",
				data: {
					"empnum": localStorage.getItem('e_num'),
					"type":"عمرة",
					"value":$(".value-txt").val(),
					"escort": $('.escort :selected').val()+escort
				},
				success: function (data) {
					alert("تم الارسال");
				},
				error: function (msg) { }
			});
				break;
			case "حج":
			$.ajax({
				url: "https://gpcnew.com/larademy/laravel/adjust",
				method: "POST",
				type: "POST",
				data: {
					"empnum": localStorage.getItem('e_num'),
					"type":"حج",
					"value":$(".value-txt").val(),
					"escort": $('.escort :selected').val()+escort
				},
				success: function (data) {
					alert("تم الارسال");
				},
				error: function (msg) { }
			});
				break;
			case "مناسبات":
			$.ajax({
				url: "https://gpcnew.com/larademy/laravel/adjust",
				method: "POST",
				type: "POST",
				data: {
					"empnum": localStorage.getItem('e_num'),
					"type":"مناسبات",
					"value":$(".value-txt").val(),
					"escort": $('.escort :selected').val()+escort
				},
				success: function (data) {
					alert("تم الارسال");
				},
				error: function (msg) { }
			});
				break;
		}
	});

});