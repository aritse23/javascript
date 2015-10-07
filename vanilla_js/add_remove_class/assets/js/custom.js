el = document.querySelector("h2");
el.classList.add("accessibly_hidden");
document.querySelector(".butt1").
	addEventListener("click",function(){
		el.classList.remove("accessibly_hidden");
	}
);