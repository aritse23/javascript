//hide p tags
// $(document).ready(function(){
// 	$("p").click(function(){  
// 		$(this).hide("slow");
// 	});
// })

$(document).ready(function(){
	$("p").click(function(){  
 		$(this).hide("slow");
 	});

	$("button").hide();
	$("#login").click(function(){
			$("button").toggle("slow");
		
	});


});

// $(document).ready(function(){

// }
