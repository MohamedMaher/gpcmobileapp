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

	/////// trips are not available
	// $.ajax({
	// 	url: "https://gpcnew.com/larademy/laravel/triptime",
	// 	method: "POST",
	// 	type: "POST",
	// 	success: function (data) {
	// 		if (JSON.parse(data) == "1") {
	// 			$("#myModal2").modal('show');
	// 		}
	// 	},
	// 	error: function (msg) { }
	// });
	// $("#myModal2").on('hide.bs.modal', function () {
	// 	window.location = "home.html";
	// });

	// $.ajax({
	// 	url: "https://gpcnew.com/larademy/laravel/tripcheck",
	// 	method: "POST",
	// 	type: "POST",
	// 	data: {
	// 		"empnum": localStorage.getItem('e_num')
	// 	},
	// 	success: function (data) {
	// 		if (JSON.parse(data) == "0") {
	// 			alert("booked before");
	// 			window.location = "trip.html";
	// 		}
	// 	},
	// 	error: function (msg) { }
	// });
	$(".emp-num").focusout(function () {

	})

	$(".area").on("change", function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/location",
			method: "POST",
			type: "POST",
			data: {
				"id": $(".area :selected").val()
			},
			success: function (data) {
				$('.trip').empty();
				$('.hotel').empty();
				$('.fog-txt').empty();
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
				"id": $(".trip :selected").val()
			},
			success: function (data) {
				$('.hotel').empty();
				$('.fog-txt').empty();
				$('.hotel').append('<option disabled selected>أختر فندق</option>');
				for (x in data) {
					var policyData=data[x].policy;
					policyData=policyData.replace(/\s/g, '_');
					$('.hotel').append('<option data-policy='+policyData+' value=' + data[x].id + '>' + data[x].name + '</option>');
				}
			},
			error: function (msg) { }
		});
	});
	$(".hotel").on("change", function () {
		policyData2=$(".hotel :selected").attr('data-policy');
		policyData2=policyData2.replace(/_/g,' ');
		console.log(policyData2);
		$('.inst-txt').text(policyData2);
		$('.policy-container').css("display","block");
		
		var txtHotel=$('.hotel :selected').html();
		if(txtHotel.search('شالية') > -1 || txtHotel.search('شاليه') > -1 || txtHotel.search('وحدة') > -1 || txtHotel.search('فيلا') > -1 || txtHotel.search('شقة') > -1){
			$('.trip-container').css("display","block");
			$('.hotels-container').css("display","none");
		}else{
			$('.hotels-container').css("display","block");
			$('.trip-container').css("display","none");
		}

		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/fog",
			method: "POST",
			type: "POST",
			data: {
				"location_id": $(".trip :selected").val(),
				"hotel_id": $(".hotel :selected").val()
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
		////////////////////
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/roomtype",
			method: "POST",
			type: "POST",
			data: {
				"hotelid": $(".hotel :selected").val()
			},
			success: function (data) {
				$('.room').empty();
				$('.room').append('<option disabled selected>أختر نوع الغرفة</option>');
				$('.fog-txt').append('<option disabled selected>أختر فوج</option>');
				for (x in data) {
					$('.room').append('<option value=' + data[x].etype + '>' + data[x].rtype + '</option>');
				}
			},
			error: function (msg) { }
		});
		$(".mem-container input").val("");
		$(".mem-container select").prop('selectedIndex', 0);
		$(".room").prop('selectedIndex', 0);
		$(".mem-single , .mem-double , .mem-triple , .mem-singlee , .mem-doublee").css("display", "none");
	});

	$('body').on("change", ".mem-type", function () {
		if ($(this).val() == "عضو") {
			$(".relhide").css("opacity", "1");
			$(".relhide").css("pointer-events", "painted");
		} else if ($(this).val() == "مرافق") {
			$(".relhide").css("opacity", "0.5");
			$(".relhide").css("pointer-events", "none");
		}
	});

	// var mem = $(".mem").detach();

	$(".room").on("change", function () {
		switch ($(this).val()) {
			case "single":
				$(".mem-single").css("display", "none");
				$(".mem-singlee").css("display", "block");
				$(".mem-double").css("display", "none");
				$(".mem-doublee").css("display", "none");
				$(".mem-triple").css("display", "none");
				$(".mem-family").css("display", "none");
				$(".mem-familyy").css("display", "none");
				break;
			case "double":
				$(".mem-double").css("display", "none");
				$(".mem-single").css("display", "none");
				$(".mem-singlee").css("display", "none");
				$(".mem-doublee").css("display", "block");
				$(".mem-triple").css("display", "none");
				$(".mem-family").css("display", "none");
				$(".mem-familyy").css("display", "none");
				break;
			case "triple":
				$(".mem-triple").css("display", "block");
				$(".mem-double").css("display", "none");
				$(".mem-single").css("display", "none");
				$(".mem-doublee").css("display", "none");
				$(".mem-singlee").css("display", "none");
				$(".mem-family").css("display", "none");
				$(".mem-familyy").css("display", "none");
				break;
			case "family":
				$(".mem-family").css("display", "none");
				$(".mem-double").css("display", "none");
				$(".mem-single").css("display", "none");
				$(".mem-doublee").css("display", "none");
				$(".mem-singlee").css("display", "none");
				$(".mem-triple").css("display", "none");
				$(".mem-familyy").css("display", "block");
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

	var fam = 0;
	var fanm = 0;
	var fcm = 0;
	var fcnm = 0;

	var singleRoom = 0;
	var doubleRoom = 0;
	var familyRoom = 0;
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

	var singleRoomCount = 0;
	var doubleRoomCount = 0;
	var familyRoomCount = 0;
	var tripleRoomCount = 0;

	// $(".partners-details").append("<li>الاسم: <input type='text' name='txtName'/></li><li>الصلة: <select class='form-control'><option value='mem'>عصو</option><option value='nonmem'>مرافق</option></select></li><li>الاسم: <input type='text' name='txtName'/></li><li>الاسم: <input type='text' name='txtName'/></li>");
	$('.add-memb').click(function () {
		$('.partners-details').append(`<li style="list-style: none;margin-bottom:10px;">
		<div class="container">
			<div class="row">
				<div class="col-xs-2">
					<img src="img/del.jpg" style="width: 50px;height: 50px;border-radius: 50%;margin: 0 auto;" alt="">
				</div>
				<div class="col-xs-10" style="border: 1px solid #fff;border-radius: 5px;">
					<div class="form" style="padding: 5px;">
						<label class="btn-lg">الاسم</label>
						<input class="form-control nam" type="text"/>
						<label class="btn-lg">السن للاطفال</label>
						<input class="form-control ag" type="text"/>
						<label class="btn-lg">وسيلة الموصلات</label>
						<select class="form-control re">
							<option disabled selected>أختر</option>
							<option value="bus">أتوبيس</option>
							<option value="pcar">سيارة خاصة</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</li>`);
	});

	$(".room-btn").click(function () {
		var roomType = $(".room").val();
		switch (roomType) {
			case "single":
				singleRoomCount = singleRoomCount + 1;
				singleRoom = 1;
				if ($(".mem-singlee .mem-name0").val() == undefined || $(".mem-singlee .mem-type0").val() == null || $(".mem-singlee .mem-rel0").val() == null) { }
				else {
					if ($(".mem-singlee  .mem-type0").val() == "عضو") {
						sam++;
					} else if ($(".mem-singlee .mem-type0").val() == "مرافق") {
						sanm++;
					}
					$(".partners-details").append("<li><h4>الحجره مفردة <br/>الاسم <span class='nam'>" + $(".mem-singlee .mem-name0").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-singlee  .mem-type0").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-singlee  .mem-rel0").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-singlee .mem-name1").val() == undefined || $(".mem-singlee .mem-type1").val() == null || $(".mem-singlee .mem-age1").val() == null || $(".mem-singlee .mem-name0").val() == undefined || $(".mem-singlee .mem-type0").val() == null || $(".mem-singlee .mem-rel0").val() == null) { }
				else {
					if ($(".mem-singlee .mem-age1").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-singlee .mem-age1").val() < 12) {
						if ($(".mem-singlee .mem-type1").val() == "عضو") {
							scm++;
						} else if ($(".mem-singlee .mem-type1").val() == "مرافق") {
							scnm++;
						}
						$(".partners-details").append("<li><h4>الحجره مفردة <br/>الاسم <span class='nam'>" + $(".mem-singlee .mem-name1").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-singlee .mem-type1").val() + "</span><br/>السن <span class='ag'> " + $(".mem-singlee .mem-age1").val() + "</span></h4></li><hr/>");
					}
				}
				if ($(".mem-singlee .mem-name2").val() == undefined || $(".mem-singlee .mem-type2").val() == null || $(".mem-singlee .mem-age2").val() == null || $(".mem-singlee .mem-name0").val() == undefined || $(".mem-singlee .mem-type0").val() == null || $(".mem-singlee .mem-rel0").val() == null) { }
				else {
					if ($(".mem-singlee .mem-age2").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-singlee .mem-age2").val() < 12) {
						if ($(".mem-singlee .mem-type2").val() == "عضو") {
							scm++;
						} else if ($(".mem-singlee .mem-type2").val() == "مرافق") {
							scnm++;
						}
						$(".partners-details").append("<li><h4>الحجره مفردة <br/>الاسم <span class='nam'>" + $(".mem-singlee .mem-name2").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-singlee .mem-type2").val() + "</span><br/>السن <span class='ag'> " + $(".mem-singlee .mem-age2").val() + "</span></h4></li><hr/>");
					}
				}
				break;

			// family
			case "family":
				familyRoom = 1;
				familyRoomCount = familyRoomCount + 1;
				if ($(".mem-familyy .mem-name0").val() == undefined || $(".mem-familyy .mem-type0").val() == null || $(".mem-familyy .mem-rel0").val() == null || $(".mem-familyy .mem-age2").val() >= 12 || $(".mem-familyy .mem-age3").val() >= 12) {
				}
				else {
					if ($(".mem-familyy .mem-type0").val() == "عضو") {
						fam++;
					} else if ($(".mem-familyy .mem-type0").val() == "مرافق") {
						fanm++;
					}
					$(".partners-details").append("<li><h4>الحجره الفاميلى <br/>الاسم <span class='nam'>" + $(".mem-familyy .mem-name0").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-familyy .mem-type0").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-familyy .mem-rel0").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-familyy .mem-name1").val() == undefined || $(".mem-familyy .mem-type1").val() == null || $(".mem-familyy .mem-rel1").val() == null || $(".mem-familyy .mem-familyy .mem-age2").val() >= 12 || $(".mem-familyy .mem-age3").val() >= 12 || $(".mem-familyy .mem-name0").val() == undefined || $(".mem-familyy .mem-type0").val() == null || $(".mem-familyy .mem-rel0").val() == null) { }
				else {
					if ($(".mem-familyy .mem-type1").val() == "عضو") {
						fam++;
					} else if ($(".mem-familyy .mem-type1").val() == "مرافق") {
						fanm++;
					}
					$(".partners-details").append("<li><h4>الحجره الفاميلى <br/>الاسم <span class='nam'>" + $(".mem-familyy .mem-name1").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-familyy .mem-type1").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-familyy .mem-rel1").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-familyy .mem-name2").val() == undefined || $(".mem-familyy .mem-type2").val() == null || $(".mem-familyy .mem-age2").val() == null || $(".mem-familyy .mem-name0").val() == undefined || $(".mem-familyy .mem-type0").val() == null || $(".mem-familyy .mem-rel0").val() == null) { }
				else {
					if ($(".mem-familyy .mem-age2").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-familyy .mem-age2").val() < 12) {
						if ($(".mem-familyy .mem-type2").val() == "عضو") {
							fcm++;
						} else if ($(".mem-familyy .mem-type2").val() == "مرافق") {
							fcnm++;
						}
						$(".partners-details").append("<li><h4>الحجره الفاميلى <br/>الاسم <span class='nam'>" + $(".mem-familyy .mem-name2").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-familyy .mem-type2").val() + "</span><br/>السن <span class='ag'>" + $(".mem-familyy .mem-age2").val() + "</span></h4></li><hr/>");
					}
				}
				if ($(".mem-familyy .mem-name3").val() == undefined || $(".mem-familyy .mem-type3").val() == null || $(".mem-familyy .mem-age3").val() == null || $(".mem-familyy .mem-name0").val() == undefined || $(".mem-familyy .mem-type0").val() == null || $(".mem-familyy .mem-rel0").val() == null) { }
				else {
					if ($(".mem-familyy .mem-age3").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-familyy .mem-age3").val() < 12) {
						if ($(".mem-familyy .mem-type3").val() == "عضو") {
							fcm++;
						} else if ($(".mem-familyy .mem-type3").val() == "مرافق") {
							fcnm++;
						}
						$(".partners-details").append("<li><h4>الحجرة الفاميلى <br/>الاسم <span class='nam'>" + $(".mem-familyy .mem-name3").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-familyy .mem-type3").val() + "</span><br/>السن <span class='ag'>" + $(".mem-familyy .mem-age3").val() + "</span></h4></li><hr/>");
					}

				}
				if ($(".mem-familyy .mem-name4").val() == undefined || $(".mem-familyy .mem-type4").val() == null || $(".mem-familyy .mem-age4").val() == null || $(".mem-familyy .mem-name0").val() == undefined || $(".mem-familyy .mem-type0").val() == null || $(".mem-familyy .mem-rel0").val() == null) { }
				else {
					if ($(".mem-familyy .mem-age4").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-familyy .mem-age4").val() < 12) {
						if ($(".mem-familyy .mem-type4").val() == "عضو") {
							fcm++;
						} else if ($(".mem-familyy .mem-type4").val() == "مرافق") {
							fcnm++;
						}
						$(".partners-details").append("<li><h4>الحجرة الفاميلى <br/>الاسم <span class='nam'>" + $(".mem-familyy .mem-name4").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-familyy .mem-type4").val() + "</span><br/>السن <span class='ag'>" + $(".mem-familyy .mem-age4").val() + "</span></h4></li><hr/>");
					}

				}
				break;

			//double
			case "double":
				doubleRoom = 1;
				doubleRoomCount = doubleRoomCount + 1;
				if ($(".mem-doublee .mem-name0").val() == undefined || $(".mem-doublee .mem-type0").val() == null || $(".mem-doublee .mem-rel0").val() == null || $(".mem-doublee .mem-age2").val() >= 12 || $(".mem-doublee .mem-age3").val() >= 12) {
				}
				else {
					if ($(".mem-doublee .mem-type0").val() == "عضو") {
						dam++;
					} else if ($(".mem-doublee .mem-type0").val() == "مرافق") {
						danm++;
					}
					$(".partners-details").append("<li><h4>الحجره المزدوجة <br/>الاسم <span class='nam'>" + $(".mem-doublee .mem-name0").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-doublee .mem-type0").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-doublee .mem-rel0").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-doublee .mem-name1").val() == undefined || $(".mem-doublee .mem-type1").val() == null || $(".mem-doublee .mem-rel1").val() == null || $(".mem-doublee .mem-doublee .mem-age2").val() >= 12 || $(".mem-doublee .mem-age3").val() >= 12) { }
				else {
					if ($(".mem-doublee .mem-type1").val() == "عضو") {
						dam++;
					} else if ($(".mem-doublee .mem-type1").val() == "مرافق") {
						danm++;
					}
					$(".partners-details").append("<li><h4>الحجره المزدوجة <br/>الاسم <span class='nam'>" + $(".mem-doublee .mem-name1").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-doublee .mem-type1").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-doublee .mem-rel1").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-doublee .mem-name2").val() == undefined || $(".mem-doublee .mem-type2").val() == null || $(".mem-doublee .mem-age2").val() == null || $(".mem-doublee .mem-name0").val() == undefined || $(".mem-doublee .mem-type0").val() == null || $(".mem-doublee .mem-rel0").val() == null) { }
				else {
					if ($(".mem-doublee .mem-age2").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-doublee .mem-age2").val() < 12) {
						if ($(".mem-doublee .mem-type2").val() == "عضو") {
							dcm++;
						} else if ($(".mem-doublee .mem-type2").val() == "مرافق") {
							dcnm++;
						}
						$(".partners-details").append("<li><h4>الحجره المزدوجة <br/>الاسم <span class='nam'>" + $(".mem-doublee .mem-name2").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-doublee .mem-type2").val() + "</span><br/>السن <span class='ag'>" + $(".mem-doublee .mem-age2").val() + "</span></h4></li><hr/>");
					}
				}
				if ($(".mem-doublee .mem-name3").val() == undefined || $(".mem-doublee .mem-type3").val() == null || $(".mem-doublee .mem-age3").val() == null || $(".mem-doublee .mem-name0").val() == undefined || $(".mem-doublee .mem-type0").val() == null || $(".mem-doublee .mem-rel0").val() == null) { }
				else {
					if ($(".mem-doublee .mem-age3").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-doublee .mem-age3").val() < 12) {
						if ($(".mem-doublee .mem-type3").val() == "عضو") {
							dcm++;
						} else if ($(".mem-doublee .mem-type3").val() == "مرافق") {
							dcnm++;
						}
						$(".partners-details").append("<li><h4>الحجرة المزدوجة <br/>الاسم <span class='nam'>" + $(".mem-doublee .mem-name3").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-doublee .mem-type3").val() + "</span><br/>السن <span class='ag'>" + $(".mem-doublee .mem-age3").val() + "</span></h4></li><hr/>");
					}

				}
				break;
			case "triple":
				tripleRoom = 1;
				tripleRoomCount = tripleRoomCount + 1;
				if ($(".mem-triple .mem-name0").val() == undefined || $(".mem-triple .mem-type0").val() == null || $(".mem-triple .mem-rel0").val() == null || $(".mem-triple .mem-age3").val() >= 12) { }
				else {
					if ($(".mem-triple .mem-type0").val() == "عضو") {
						tam++;
					} else if ($(".mem-triple .mem-type0").val() == "مرافق") {
						tanm++;
					}
					$(".partners-details").append("<li><h4>الحجره الثلاثية <br/>الاسم <span class='nam'>" + $(".mem-triple .mem-name0").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-triple .mem-type0").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-triple .mem-rel0").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-triple .mem-name1").val() == undefined || $(".mem-triple .mem-type1").val() == null || $(".mem-triple .mem-rel1").val() == null || $(".mem-triple .mem-age3").val() >= 12) { }
				else {
					if ($(".mem-triple .mem-type1").val() == "عضو") {
						tam++;
					} else if ($(".mem-triple .mem-type1").val() == "مرافق") {
						tanm++;
					}
					$(".partners-details").append("<li><h4>الحجره الثلاثية <br/>الاسم <span class='nam'>" + $(".mem-triple .mem-name1").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-triple .mem-type1").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-triple .mem-rel0").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-triple .mem-name2").val() == undefined || $(".mem-triple .mem-type2").val() == null || $(".mem-triple .mem-rel2").val() == null || $(".mem-triple .mem-age3").val() >= 12) { }
				else {
					if ($(".mem-triple .mem-type2").val() == "عضو") {
						tam++;
					} else if ($(".mem-triple .mem-type2").val() == "مرافق") {
						tanm++;
					}
					$(".partners-details").append("<li><h4>الحجره الثلاثية <br/>الاسم <span class='nam'>" + $(".mem-triple .mem-name2").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-triple .mem-type2").val() + "</span><br/>القرابة <span class='re'> " + $(".mem-triple .mem-rel0").val() + "</span></h4></li><hr/>");
				}
				if ($(".mem-triple .mem-name3").val() == undefined || $(".mem-triple .mem-type3").val() == null || $(".mem-triple .mem-age3").val() == null || $(".mem-triple .mem-name0").val() == undefined || $(".mem-triple .mem-type0").val() == null) { }
				else {
					if ($(".mem-triple .mem-age3").val() >= 12) {
						alert("الاطفال اقل من 12 سنة");
					} else if ($(".mem-triple .mem-age3").val() < 12) {
						if ($(".mem-triple .mem-type3").val() == "عضو") {
							tcm++;
						} else if ($(".mem-triple .mem-type3").val() == "مرافق") {
							tcnm++;
						}
						$(".partners-details").append("<li><h4>الحجره الثلاثية <br/>الاسم <span class='nam'>" + $(".mem-triple .mem-name3").val() + "</span><br/>الصلة <span class='typ'>" + $(".mem-triple .mem-type3").val() + "</span><br/>السن <span class='ag'>" + $(".mem-triple .mem-age3").val() + "</span></h4></li><hr/>");
					}
				}
				break;
		}

		$(".mem-container input").val("");
		$(".mem-container select").prop('selectedIndex', 0);
		$(".room").prop('selectedIndex', 0);
		$(".mem-single ,.mem-singlee , .mem-double ,.mem-doublee , .mem-triple, .mem-family ,.mem-familyy").css("display", "none");
		$(".trip , .hotel , .fog-txt").css("opacity", "0.5");
		$(".trip , .hotel , .fog-txt").css("pointer-events", "none");
	});
	var totalCost;
	$("#accept").click(function () {
		if ($(this).is(':checked')) {
			$(".submit-btn").css("opacity", "1");
			$(".submit-btn").css("pointer-events", "painted");
		} else {
			$(".submit-btn").css("opacity", "0.5");
			$(".submit-btn").css("pointer-events", "none");
		}
	});

	$(".show-btn").click(function () {
		window.location = "view.html";
	})
	$(".cost-btn").click(function () {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/costs",
			method: "POST",
			type: "POST",
			data: {
				"tripid": $(".hotel :selected").val(),
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
				"tcnm": tcnm,
				"family": familyRoom,
				"fam": fam,
				"fanm": fanm,
				"fcm": fcm,
				"fcnm": fcnm
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


	var saveData, rooms = "";
	var finalTrip = 0;
	$(".submit-btn").click(function () {

		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/savedata",
			method: "POST",
			type: "POST",
			data: {
				"empnum": localStorage.getItem('e_num'),
				"empname": $(".emp-nam").val(),
				"area": $(".area :selected").text(),
				"place": $(".trip :selected").text(),
				"hotel": $(".hotel :selected").text(),
				"fog": $(".fog-txt :selected").text(),
				"dpt": $(".dpt").val(),
				"phone": $(".phone").val(),
				"mobile": $(".mobile").val(),
				"notes": $("#notes").val(),
				"transport": $('input[name=trans]:checked').val(),
				"single": singleRoomCount,
				"double": doubleRoomCount,
				"triple": tripleRoomCount,
				"family": familyRoomCount
			},
			success: function (data) {
				saveData = "Done";
				alert("التسجيل تم بنجاح");
			},
			error: function (msg) {
				saveData = "Failed";
			}
		});


		$(".partners-details li").each(function () {
			$.ajax({
				url: "https://gpcnew.com/larademy/laravel/family",
				method: "POST",
				type: "POST",
				data: {
					"empnum": localStorage.getItem('e_num'),
					"name": $(this).find(".nam").val(),
					"age": $(this).find(".ag").val(),
					"type": $(this).find(".typ").text(),
					"rel": $(this).find(".re :selected").text(),
				},
				success: function (data) {
					//alert("التسجيل تم بنجاح");
				},
				error: function (msg) {

				}
			});
		});

	});
});