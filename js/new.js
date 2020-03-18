$(function(){
    $.ajax({
		url : "https://gpcnew.com/larademy/laravel/petnews",
		method : "POST",
		type : "POST",
		data : {
			
		},
		success : function(data) {
			var parsed = JSON.parse(JSON.stringify(data));
			for (var x in parsed) {
                $('.new_cont').append('<div class="row" style="direction:rtl;"><div class="col-xs-1"></div><div class="col-xs-10"><div class="media" data-toggle="collapse" href="#'+x+'" aria-expanded="false" aria-controls="'+parsed[x].newspaper_name+'" style="background-color:#124961;border-radius: 20px;"><div class="media-left" style="vertical-align:middle;"><img src="'+parsed[x].logo_url+'" class="media-object" style="width:60px;background-color: #fff;padding: 5px;border-radius: 60px;"></div><div class="media-body"><h4 class="media-heading btn-block btn-lg" style="color:white;font-size:x-large;text-shadow:#000 4px 8px 8px;">'+parsed[x].newspaper_name+'</h4></div></div><div class="row"><div class="col-xs-1"></div><div class="col-xs-10" style="background-color: #ffffff45;border-bottom: 1px solid #000;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;z-index:-1;margin-top:-5px;"><div class="collapse multi-collapse" id='+x+'><div class="card card-body"><h3 class="text-center" style="color:white;">'+parsed[x].news+'</h3></div></div></div></div></div><div class="col-xs-1"></div></div>');
			}
		},
		error : function(msg) {
			alert("Please check your internet connection");
		}
    });
})