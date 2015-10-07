var button = document.querySelector(".show"); 
var text = document.querySelector(".enquiries");
var visible = false;

text.classList.add("accessibly_hidden");

button.addEventListener("click", function(){
	if (visible){
		text.classList.add("accessibly_hidden");
	}else {
		text.classList.remove("accessibly_hidden");
	}
	visible = !visible;
});