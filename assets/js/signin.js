// Error Catcher Function
function error_cb(error) {
    console.log(error);
}


// Processing the form
function processForm(){
    var username = $("#username").val();
    var password = $("#password").val();

    if(localStorage.getItem(username)){
        user = localStorage.getItem(username);
        if(password==JSON.parse(user).password){
            window.location.replace('./dashboard.html');
        }else{
            alert("Пайдаланушы аты немесе құпиясөз дұрыс емес!")
        }
    }
    else{
        alert("Пайдаланушы аты немесе құпиясөз дұрыс емес!")
    }
}


// On button click
$('#submitBtn').on('click', function(){
    processForm.call();
});