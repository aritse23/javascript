 var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay to body
$("body").append($overlay);

$("#gallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href"); //takes the attribute href of link you just clicked, then stores in the variable imageLocation
	$image.attr("src", imageLocation);
	$overlay.show();

	//takes the "a" link you clicked, retrieves the alt attribute of the child element img then stores inside captionText variable.
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);


	//hides the overlay when clicking anywhere on the overlay
	$overlay.click(function(){
		$overlay.hide();
	})
});