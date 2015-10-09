

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
	return $password.val() === $confirmPassword.val();
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

function confirmPasswordEvent() {
    if (arePasswordsMatching()) {
        $confirmPassword.next()
            .hide();
    } else {
        $confirmPassword.next()
            .show();
    }
}

//if the html elements value is not correct stop the submit
function enableSubmitEvent() {
	$("#submit").prop("disabled", !canSubmit());
}

// if username is present hide the span, else show
function usernameEvent() {
	if(isUsernamePresent()){
		$username.next().hide();
	} else {
		$username.next().show();
	}
}
// when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
// // isUsernamePresent()

// return

// .length

// >