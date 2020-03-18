$(function () {

	$body=$("body");
	$(document).on({
		ajaxStart:function(){$body.addClass("loading");},
		ajaxStop:function(){$body.removeClass("loading");}
	})

	

	$('input[type="file"]').change(function(e){
		
	// 	var reader = new FileReader();

	// 	reader.onload = function () {
	// 		var text = reader.result;
	// 		var row = text.split("\n");
	// 		for (var index = 0; index < row.length; index++) {
	// 			var column = row[index].split("\t");
	// 			console.log();
	// 			$.ajax({
	// 				url: "https://gpcnew.com/larademy/laravel/med_gover",
	// 				method: "POST",
	// 				type: "POST",
	// 				data: {
	// 					"code": column[0],
	// 					"name": column[1]
	// 				},
	// 				success: function (data) {

	// 				},
	// 				error: function (msg) { }
	// 			});

	// 		}
	// 	};
	// 	reader.readAsText(e.target.files[0]);
	// 	////////////////////////////////////////////////////////////////
	// 	var reader = new FileReader();

	// 	reader.onload = function () {
	// 		var text = reader.result;
	// 		var row = text.split("\n");
	// 		for (var index = 0; index < row.length; index++) {
	// 			var column = row[index].split("\t");
	// 			console.log();
	// 			$.ajax({
	// 				url: "https://gpcnew.com/larademy/laravel/med_mdn",
	// 				method: "POST",
	// 				type: "POST",
	// 				async:false,
	// 				data: {
	// 					"gov_code": column[1],
	// 					"code": column[2],
	// 					"name": column[3]
	// 				},
	// 				success: function (data) {

	// 				},
	// 				error: function (msg) { }
	// 			});

	// 		}
	// 	};
	// 	reader.readAsText(e.target.files[0]);
	// 	//////////////////////////////////////////////////////////////////

	// 	var reader = new FileReader();

	// 	reader.onload = function () {
	// 		var text = reader.result;
	// 		var row = text.split("\n");
	// 		for (var index = 0; index < row.length; index++) {
	// 			var column = row[index].split("\t");
	// 			console.log();
	// 			$.ajax({
	// 				url: "https://gpcnew.com/larademy/laravel/med_spec",
	// 				method: "POST",
	// 				type: "POST",
	// 				async:false,
	// 				data: {
						
	// 					"code": column[0],
	// 					"name": column[1]
	// 				},
	// 				success: function (data) {

	// 				},
	// 				error: function (msg) { }
	// 			});

	// 		}
	// 	};
	// 	reader.readAsText(e.target.files[0]);
	// 	//////////////////////////////////////////////////

	// 	var reader = new FileReader();

	// 	reader.onload = function () {
	// 		var text = reader.result;
	// 		var row = text.split("\n");
	// 		for (var index = 0; index < row.length; index++) {
	// 			var column = row[index].split("\t");
	// 			console.log();
	// 			$.ajax({
	// 				url: "https://gpcnew.com/larademy/laravel/med_doc",
	// 				method: "POST",
	// 				type: "POST",
	// 				async:false,
	// 				data: {
	// 					"code": column[0],
	// 					"name": column[1],
	// 					"spec_code": column[2]
	// 				},
	// 				success: function (data) {

	// 				},
	// 				error: function (msg) { }
	// 			});

	// 		}
	// 	};
	// 	reader.readAsText(e.target.files[0]);

	// 	////////////////////////////////////////////////////

	// 	var reader = new FileReader();

	// 	reader.onload = function () {
	// 		var text = reader.result;
	// 		var row = text.split("\n");
	// 		for (var index = 0; index < row.length; index++) {
	// 			var column = row[index].split("\t");
	// 			console.log();
	// 			$.ajax({
	// 				url: "https://gpcnew.com/larademy/laravel/med_hos",
	// 				method: "POST",
	// 				type: "POST",
	// 				async:false,
	// 				data: {
	// 					"code": column[0],
	// 					"name": column[1],
	// 					"hospital": column[2],
	// 					"ray": column[3],
	// 					"analysis": column[4],
	// 					"normal": column[5],
	// 					"dental": column[6],
	// 					"pharmacy": column[7]
	// 				},
	// 				success: function (data) {

	// 				},
	// 				error: function (msg) { }
	// 			});

	// 		}
	// 	};
	// 	reader.readAsText(e.target.files[0]);

	// 	////////////////////////////////////////////////////

	// 	var reader = new FileReader();

	// 	reader.onload = function () {
	// 		var text = reader.result;
	// 		var row = text.split("\n");
	// 		for (var index = 0; index < row.length; index++) {
	// 			var column = row[index].split("\t");
	// 			console.log();
	// 			$.ajax({
	// 				url: "https://gpcnew.com/larademy/laravel/med_docd",
	// 				method: "POST",
	// 				type: "POST",
	// 				async:false,
	// 				data: {
	// 					"code": column[0],
	// 					"address1": column[1],
	// 					"phone1": column[2],
	// 					"phone2": column[3],
	// 					"phone3": column[4],
	// 					"city_code": column[6],
	// 					"gov_code": column[5]
						
	// 				},
	// 				success: function (data) {

	// 				},
	// 				error: function (msg) { }
	// 			});

	// 		}
	// 	};
	// 	reader.readAsText(e.target.files[0]);

	// // 	////////////////////////////////////////////////////

		var reader = new FileReader();

		reader.onload = function () {
			var text = reader.result;
			var row = text.split("\n");
			for (var index = 0; index < row.length; index++) {
				var column = row[index].split("\t");
				console.log();
				$.ajax({
					url: "https://gpcnew.com/larademy/laravel/med_hosd",
					method: "POST",
					type: "POST",
					async:false,
					data: {
						"code": column[0],
						"address1": column[1],
						"phone1": column[2],
						"phone2": column[3],
						"phone3": column[4],
						"city_code": column[6],
						"gov_code": column[5]
						
					},
					success: function (data) {

					},
					error: function (msg) { }
				});

			}
		};
		reader.readAsText(e.target.files[0]);
	 });
});