// var myCart = [];
// myCart[0]="bread";
// myCart[1]="milk";
// myCart[2]="cheese";
// // myCart[myShop.length] = "egg";
// myCart.push(7,8,9);
// // myCart.unshift(7,8,9);
// // alert(myCart[5]);

function printList( list ) {
	var listHTML = '<ol>';
	for(var i = 0; i < list.length; i++){
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html) {
	document.write(html);
}

