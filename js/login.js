document.getElementById('Submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('Email-field');
    const ownMail = emailField.value;
    

    const passwordField = document.getElementById('password-field');
    const ownPass = passwordField.value;

    if(ownMail === 'bapertaka@gmail.com' && ownPass === 'joyertakalagbo'){
        window.location.href = "money.html"
        // console.log('okk')
    }else {
        alert ('Something is wrong')
    }
})