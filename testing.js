
var API_PATH = "http://www.giantbomb.com/api/videos/";
var API_KEY  = "";

var videos = [];
var time_limits = [];

var offsetNum = 0;
var counter = 1;
var done = 0;
var copyPaste = "Testing THIS BULLLLLLLOOONEY!";

getQuickLooks();

function getQuickLooks(){	
	$(document).ready(function(){
		$.ajax({
		  url: "http://api.giantbomb.com/videos/",
		  type: "get",
		  data: {	api_key : API_KEY, 
					video_type: "3", 
					field_list : "id,length_seconds,embed_player,name,site_detail_url", 
					format : "jsonp", 
					json_callback : "filterData",
					offset : offsetNum},
		  dataType: "jsonp"
		});
	});
}

function filterData(data) {
	if(data.results.length != 0){	
		console.log(data);
		for(var i=0; i < data.results.length; i++){
			console.log(counter + " : ID= " + data.results[i].id + " Length= " + data.results[i].length_seconds);
			$('body').append('\"'+ data.results[i].id + ',' + data.results[i].name + ',' + data.results[i].site_detail_url + '\",');
			$('body').append('<br>');
			counter += 1;
		}
		offsetNum += 100;
		getQuickLooks();
	}else{
		
	}
}
