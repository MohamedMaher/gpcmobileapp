$(function () {
	if (window.sessionStorage.getItem('type') == "DOCTOR") {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/med_doc_data",
			method: "POST",
			type: "POST",
			data: {
				"city": window.sessionStorage.getItem('city'),
				"spec": window.sessionStorage.getItem('spec')
			},
			success: function (data) {
				if (data == "") {
					$('.regform').append(
						`<h2>لا يوجد بيانات...</h2>`
					);
				} else {
					for (index in data) {
						$('.regform').append(
							`<ul class="list-group">
							<li class="list-group-item"><h4><b>`+ data[index].NAME + `</b></h4></li>
							<li class="list-group-item"><a href="http://maps.google.com/?q=`+ data[index].ADDRESS1 + `"><h5><b> العنوان :</b>` + data[index].ADDRESS1 + `</h5></a></li>
							<li class="list-group-item"><h5><b> التليفون :</b><a href="tel:`+ data[index].PHONE1 + `">` + data[index].PHONE1 + `</a><br/><a href="tel:` + data[index].PHONE2 + `">` + data[index].PHONE2 + `</a><br/><a href="tel:` + data[index].PHONE3 + `">` + data[index].PHONE3 + `</a></h5></li>
							</ul>`
						);
					}
				}
			},
			error: function (msg) { }
		});
	} else {
		$.ajax({
			url: "https://gpcnew.com/larademy/laravel/med_hos_data",
			method: "POST",
			type: "POST",
			data: {
				"city": window.sessionStorage.getItem('city'),
				"typet": window.sessionStorage.getItem('type')
			},
			success: function (data) {
				if (data == "") {
					$('.regform').append(
						`<h2>لا يوجد بيانات...</h2>`
					);
				} else {
					for (index in data) {
						$('.regform').append(
							`<ul class="list-group">
							<li class="list-group-item"><h4><b>`+ data[index].NAME + `</b></h4></li>
							<li class="list-group-item"><a href="http://maps.google.com/?q=`+ data[index].ADDRESS1 + `"><h5><b> العنوان :</b>` + data[index].ADDRESS1 + `</h5></a></li>
							<li class="list-group-item"><h5><b> التليفون :</b><a href="tel:`+ data[index].PHONE1 + `">` + data[index].PHONE1 + `</a><br/><a href="tel:` + data[index].PHONE2 + `">` + data[index].PHONE2 + `</a><br/><a href="tel:` + data[index].PHONE3 + `">` + data[index].PHONE3 + `</a></h5></li>
							</ul>`
						);
					}
				}

			},
			error: function (msg) { }
		});
	}


});