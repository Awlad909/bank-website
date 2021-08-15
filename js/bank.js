document.getElementById('login-submit').addEventListener('click', function(){
    //get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get pass
    const passwordField = document.getElementById('user-pass');
    const userPassword = passwordField.value;
    //check email and pass
    if(userEmail == 'awlad@gmail.com' && userPassword == 'secret'){
        window.location.href ='banking.html';
    };
    
});


