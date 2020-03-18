$(function(){
	$body=$("body");
	$(document).on({
		ajaxStart:function(){$body.addClass("loading");},
		ajaxStop:function(){$body.removeClass("loading");}
	})
    $.ajax({
		url : "https://gpcnew.com/larademy/laravel/magazine",
		method : "POST",
		type : "POST",
		data : {
			
		},
		success : function(data) {
			var parsed = JSON.parse(JSON.stringify(data));
			for (var x in parsed) {
        		$('.mag_cont').append('<div class="row"><div class="col-xs-1"></div><div class="col-xs-10 text-center"><b><a style="color:white;" target="_blank" href="'+parsed[x].pdfurl+'"><h4 style="font-weight:700;">('+parsed[x].name+')</h4></a></b><a style="color:white;" target="_blank" href="'+parsed[x].pdfurl+'"><img src="'+parsed[x].coverurl+'" style="margin:0px auto;" class="img-responsive" alt="image here" /></a><br/><br/></div><div class="col-xs-1"></div></div><br/>');
			}
		},
		error : function(msg) {
			alert("Please check your internet connection");
		}
    });
})