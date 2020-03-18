$(function () {
	$.ajax({
		url: "https://gpcnew.com/larademy/laravel/city",
		method: "POST",
		type: "POST",
		success: function (data) {
			$('.area').append('<option disabled selected>أختر المنطقة</option>');
			for (x in data) {
				$('.area').append('<option value=' + data[x].id + '>' + data[x].name + '</option>');
			}
		},
		error: function (msg) { }
	});

	$(".area").on("change", function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/location",
			method: "POST",
			type: "POST",
			data: {
				"id": $(this).val()
			},
			success: function (data) {
				$('.trip').empty();
				$('.trip').append('<option disabled selected>أختر المصيف</option>');
				for (x in data) {
					$('.trip').append('<option value=' + data[x].id + '>' + data[x].location + '</option>');
				}
			},
			error: function (msg) { }
		});
	});
	$(".trip").on("change", function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/hotel",
			method: "POST",
			type: "POST",
			data: {
				"id": $(this).val()
			},
			success: function (data) {
				$('.hotel').empty();
				$('.hotel').append('<option disabled selected>أختر فندق</option>');
				for (x in data) {
					$('.hotel').append('<option value=' + data[x].id + '>' + data[x].name + '</option>');
				}
			},
			error: function (msg) { }
		});
	});
	$(".hotel").on("change", function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/fog",
			method: "POST",
			type: "POST",
			data: {
				"location_id": $(".area").val(),
				"hotel_id": $(this).val()
			},
			success: function (data) {
				$('.fog-txt').empty();
				$('.fog-txt').append('<option disabled selected>أختر فوج</option>');
				for (x in data) {
					$('.fog-txt').append('<option value=' + data[x].name + '>' + data[x].name + '</option>');
				}
			},
			error: function (msg) { }
		});
	});

	$('body').on("change", ".mem-type", function () {
		if ($(this).val() == "member") {
			$(".relhide").css("opacity", "1");
			$(".relhide").css("pointer-events", "painted");
		} else if ($(this).val() == "not-member") {
			$(".relhide").css("opacity", "0.5");
			$(".relhide").css("pointer-events", "none");
		}
	});

	var mem = $(".mem").detach();

	$(".room").on("change", function () {
		switch ($(this).val()) {
			case "single":
				$(".mem-container").empty();
				for (var x = 0; x < 2; x++) {
					var memElement = mem.clone();
					memElement.find(".mem-name").addClass("mem-name" + (x));
					memElement.find(".mem-age").addClass("mem-age" + x);
					memElement.find(".mem-age").val("12");
					memElement.find(".mem-type").addClass("mem-type" + (x));
					memElement.find(".mem-rel").addClass("mem-rel" + (x));
					$(".mem-container").append(memElement);
				}
				break;
			case "double":
				$(".mem-container").empty();
				for (var x = 0; x < 4; x++) {
					memElement = mem.clone();
					memElement.find(".mem-name").addClass("mem-name" + (x));
					memElement.find(".mem-age").addClass("mem-age" + (x));
					memElement.find(".mem-age").val("12");
					memElement.find(".mem-type").addClass("mem-type" + (x));
					memElement.find(".mem-rel").addClass("mem-rel" + (x));
					$(".mem-container").append(memElement);
				}
				break;
			case "triple":
				$(".mem-container").empty();
				for (var x = 0; x < 6; x++) {
					memElement = mem.clone();
					memElement.find(".mem-name").addClass("mem-name" + (x));
					memElement.find(".mem-age").addClass("mem-age" + (x));
					memElement.find(".mem-age").val("12");
					memElement.find(".mem-type").addClass("mem-type" + (x));
					memElement.find(".mem-rel").addClass("mem-rel" + (x));
					$(".mem-container").append(memElement);
				}
				break;
		}

	});

	$(".room-rel2").on("change", function () {

	});

	var sam = 0;
	var sanm = 0;
	var scm = 0;
	var scnm = 0;

	var dam = 0;
	var danm = 0;
	var dcm = 0;
	var dcnm = 0;

	var tam = 0;
	var tanm = 0;
	var tcm = 0;
	var tcnm = 0;

	var singleRoom = 0;
	var doubleRoom = 0;
	var tripleRoom = 0;

	var singAge = "";
	var singName = "";
	var singRel = "";
	var singType = "";

	var doubAge = "";
	var doubName = "";
	var doubRel = "";
	var doubType = "";

	var tripAge = "";
	var tripName = "";
	var tripRel = "";
	var tripType = "";

	var dataInputs = [];

	$(".room-btn").click(function () {
		var roomType = $(".room").val();
		switch (roomType) {
			case "single":
				singleRoom = 1;
				for (var index = 0; index < 2; index++) {
					singAge = $(".mem-age" + index).val();
					singType = $(".mem-type" + index).val();
					singName = $(".mem-name" + index).val();
					singRel = $(".mem-rel" + index).val();
					if (singAge >= 12) {
						if (sam == 1 || sanm == 1) {
							alert("سياسة الحجرة المفردة فرد بالغ وفرد سنة أقل من 11 سنة");
						}
						else {
							if (singType == "member") {
								sam++;
							} else if (singType == "not-member") {
								sanm++;
							}
							$(".partners-details").append("<li>الحجره مفردة <br/>الاسم " + singName + "<br/>العمر " + singAge + "</li>الصلة " + singType + "</li><hr/>");
						}
					} else if (singAge < 12) {
						if (scm == 1 || scnm == 1) {
							alert("سياسة الحجرة المفردة فرد بالغ وفرد سنة أقل من 11 سنة");
						}
						else {
							if (singType == "member") {
								scm++;
							} else if (singType == "not-member") {
								scnm++;
							}
							$(".partners-details").append("<li>الحجره مفردة <br/>الاسم " + singName + "<br/>العمر " + singAge + "</li>الصلة " + singType + "</li><hr/>");
						}
					}
				}
				sam=0;sanm=0;scm=0;scnm=0;
				break;
			case "double":
				doubleRoom = 1;
				for (var x = 0; x < 4; x++) {
					doubAge = $(".mem-age" + x).val();
					doubType = $(".mem-type" + x).val();
					doubName = $(".mem-name" + x).val();
					doubRel = $(".mem-rel" + x).val();
					if (doubAge >= 12) {
						if (dam == 2 || danm == 2) {
							alert("سياسة الحجرة المزدوجة 2 فرد بالغ و2 فرد سنة أقل من 11 سنة");
						} else {
							if (doubType == "member") {
								dam++;
							} else if (doubType == "not-member") {
								danm++;
							}
							$(".partners-details").append("<li>الحجره مزدوجة <br/>الاسم " + doubName + "<br/>العمر " + doubAge + "</li>الصلة " + doubType + "</li><hr/>");
						}
					} else if (doubAge < 12) {
						if (dcm == 2 || dcnm == 2) {
							alert("سياسة الحجرة المزدوجة 2 فرد بالغ و2 فرد سنة أقل من 11 سنة");
						} else {
							if (doubType == "member") {
								dcm++;
							} else if (doubType == "not-member") {
								dcnm++;
							}
							$(".partners-details").append("<li>الحجره مزدوجة <br/>الاسم " + doubName + "<br/>العمر " + doubAge + "</li>الصلة " + doubType + "</li><hr/>");
						}
					}
				}
				dam=0;danm=0;dcm=0;dcnm=0;
				break;
			case "triple":
				tripleRoom = 1;
				for (var x = 0; x < 4; x++) {
					tripAge = $(".mem-age" + x).val();
					tripType = $(".mem-type" + x).val();
					tripName = $(".mem-name" + x).val();
					tripRel = $(".mem-rel" + x).val();
					if (tripAge >= 12) {
						if (tam == 3 || tanm == 3) {
							alert("سياسة الحجرة الثلاثية 3 فرد بالغ وفرد سنة أقل من 11 سنة");
						} else {
							if (tripType == "member") {
								tam++;
							} else if (tripType == "not-member") {
								tanm++;
							}
							$(".partners-details").append("<li>الحجره ثلاثية <br/>الاسم " + tripName + "<br/>العمر " + tripAge + "</li>الصلة " + tripType + "</li><hr/>");
						}
					} else if (tripAge < 12) {
						if (tcm == 1 || tcnm == 1) {
							alert("سياسة الحجرة الثلاثية 3 فرد بالغ وفرد سنة أقل من 11 سنة");
						} else {
							if (tripType == "member") {
								tcm++;
							} else if (tripType == "not-member") {
								tcnm++;
							}
							$(".partners-details").append("<li>الحجره ثلاثية <br/>الاسم " + tripName + "<br/>العمر " + tripAge + "</li>الصلة " + tripType + "</li><hr/>");
						}
					}
				}
				tam=0;tanm=0;tcm=0;tcnm=0;
				break;
		}
	});

	// $(".add-btn").click(function () {
	// 	if ($(".relation").val() == "أخرى") {
	// 		$(".guys").append("<li>" + $('.mem-name').val() + "</li>");
	// 	}
	// 	else {
	// 		$(".members").append("<li>" + $('.mem-name').val() + "</li>");
	// 	}
	// 	$(".relation").val('');
	// });

	var totalCost;

	$("#accept").click(function () {
		if ($(this).is(':checked')) {
			$(".submit-btn").css("opacity", "1");
			$(".submit-btn").css("pointer-events", "paint");
		} else {
			$(".submit-btn").css("opacity", "0.5");
			$(".submit-btn").css("pointer-events", "none");
		}
	});


	$(".cost-btn").click(function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/cost",
			method: "POST",
			type: "POST",
			data: {
				"single": singleRoom,
				"sam": sam,
				"sanm": sanm,
				"scm": scm,
				"scnm": scnm,
				"double": doubleRoom,
				"dam": dam,
				"danm": danm,
				"dcm": dcm,
				"dcnm": dcnm,
				"triple": tripleRoom,
				"tam": tam,
				"tanm": tanm,
				"tcm": tcm,
				"tcnm": tcnm
			},
			success: function (data) {
				totalCost = JSON.parse(data);
				$("#myModal").modal('show');
			},
			error: function (msg) { }
		});
	});
	$("#myModal").on('show.bs.modal', function () {
		$(".total-cost").html(totalCost);
	});
	$(".submit-btn").click(function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/savedata",
			method: "POST",
			type: "POST",
			data: {
				"area": singleRoom,
				"place": sam,
				"hotel": sanm,
				"fog": scm,
				"dpt": scnm,
				"phone": tcnm
			},
			success: function (data) {
				totalCost = JSON.parse(data);
				$("#myModal").modal('show');
			},
			error: function (msg) { }
		});
	});
});