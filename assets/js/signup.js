// Error Catcher Function
function error_cb(error) {
    console.log(error);
}


// Email Validator
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


// ConfirmPassword validator
const validatePassword = (password1, password2) => {
   if(password1==password2){
        return true;
   }
   else{
        return false;
   }
}


// Password Length Validator
const isValidPassword = (password1) => {
    if(password1.length>=8){
        return true;
    }
    else{
        return false;
    }
}



// Processing the form
function processForm(){
    var username = $("#username").val();
    var email = $("#email").val();
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    /*
    console.log(username);
    console.log(email);
    console.log(password1);
    console.log(password2);

    console.log(validateEmail(email));
    console.log(isValidPassword(password1));
    console.log(validatePassword(password1, password2));
    */

    if(validateEmail(email) && isValidPassword(password1) && validatePassword(password1, password2)){
        var obj = {'email':email, 'password':password1}
        var serialObj = JSON.stringify(obj)
        if(localStorage.getItem(username)){
            alert("Бұндай қолданушы тіркеліп қойған. Басқа ат қойып көріңіз.");
        }else{
            localStorage.setItem(username, serialObj);
            window.location.replace('./dashboard.html');
        }
    }
}


// On button click
$('#submitBtn').on('click', function(){
    processForm.call();
});