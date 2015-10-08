

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username =$("#username");

$("form span").hide();

function isUsernamePresent(){
	return $username.val().length > 0;
}

function isPasswordValid() {
	return $password.val().length > 8;
}

function arePasswordsMatching() {
	$password.val() === $confirmPassword.val();
}

function canSubmit() {
	return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();	
}

function passwordEvent() {
	//find out if password iv valid
	if(isPasswordValid()){
		//hide hint if  valid
		$password.next().hide();
	}
	else {
		//else show hint
		$password.next().show();
	}
}
// isUsernamePresent()

// return

// .length

// >