$(document).ready(function() {
	
	var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
	
    var mon = month;
    mon = mon + 1;
    
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	
	$(".datecu").html(day+ ' - ' + (mon) + ' - ' + year);
    
	$(".next").click(function () {		
		if (day >= 30) {
            mon = mon + 1;
			if (mon > 12) {
				year = year + 1;
				mon = 1;
				day = 1;
			}
            day = 1;
        }else if(day < 30){
			day = day + 1;
		}
		$(".datecu").html(day+ ' - ' +(mon - 1) + ' - ' + year);
    });
    $(".priv").click(function () {
       if (day <= 1) {
            mon = mon - 1;
			if (mon < 1) {
				year = year - 1;
				mon = 1;
				day = 1;
			}
            day = 1;
        }else if(day > 1){
			day = day - 1;
		}
		$(".datecu").html(day+ ' - ' + (mon - 1) + ' - ' + year);
    });
	
	$('#brand').append($('<option>',{value:"",text:""}));
	$.ajax({
		url : "http://gpc.com.eg/larademy/laravel/specialist",
		method : "POST",
		type : "POST",
		data : {
			
		},
		success : function(data) {
			var parsed = JSON.parse(JSON.stringify(data));
			for (var x in parsed) {
				$('#brand').append($('<option>',{value:parsed[x].specialist_code,text:parsed[x].specialist_name}));
			}
		},
		error : function(msg) {
			
		}
	});
	$(".m1").click(function(){
		$(".msg").fadeIn();
	});
	$(".se").click(function(){
		$.ajax({
			url : "http://gpc.com.eg/larademy/laravel/doctors",
			method : "POST",
			type : "POST",
			data : {
				code:$('#brand').val()
			},
			success : function(data) {
				var parsed = JSON.parse(JSON.stringify(data));
				for (var x in parsed) {
					$('#brand').append($('<option>',{value:parsed[x].specialist_code,text:parsed[x].specialist_name}));
				}
			},
			error : function(msg) {
				
			}
		});
	});
});

