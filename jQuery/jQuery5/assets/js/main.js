// //hide p tags
// // $(document).ready(function(){
// // 	$("p").click(function(){  
// // 		$(this).hide("slow");
// // 	});
// // })

// // $(document).ready(function(){
// // 	$("p").click(function(){  
// //  		$(this).hide("slow");
// //  	});

// 	$("button").hide();
// 	$("#login").click(function(){
// 			$("button").toggle("slow");
		
// 	});


// // });

// $(document).ready(function(){
// 	$(".butt2").click(function(){
// 		$("p").fadeToggle(1000);
// 	});
// });

$(document).ready(function(){
	$("button").click(function(){
		$(".demo").slideToggle();
	})
});



// });

// $(document).ready(function(){
// 	$("button").click(function(){
// 		$(".demo").animate({
// 			left: "250px",
// 			height: "250px",
// 			width: "300px",
// 		});
// 	})

// });

// $(document).ready(function(){
// 	$(".demo").click(function(){
// 		$(".demo2").slideDown(2000);
// 	});
// 	$("button").click(function(){
// 		$(".demo2").stop();
// 	})
// });

// $(document).ready(function(){
// 	$("p").empty();
// });

// append() insert content at the end of element
// prepend() insert content at the end of element
// after() insert content after element
// before() insert content before element

//remove() removes selected elements and children
//empty() removes child elements of selected elements

// $(document).ready(function(){
// 	$("p").click(function(){
// 		$(this).toggleClass("important");
// 	});
// });


// $(document).ready(function(){
// 	$("p").css({
// 		"background-color": "blue",
// 		"color": "green",
// 		"font-size": "30px",
// 		"padding": "15px"
// 	});


// 	// $("button").click(function(){
// 	// 	alert("Background color= " + $("p").css("background"))
// 	// });

// });

// $(document).ready(function(){
// 	$("button").click(function(){
// 		var txt = "";
// 		txt +="Outer Width: " + $(".demo3").outerWidth() + "</br>";
// 		txt +="Outer Height: " + $(".demo3").outerHeight();
// 		$(".demo3").html(txt);
// 	})
// });

//addClass();
//removeClass();
//toggleClass();
//css()
