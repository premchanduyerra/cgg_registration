



function formSubmit(e) {
    e.preventDefault()

    console.log(grecaptcha.getResponse());
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var phone = document.getElementById('phone');
    var username = document.getElementById('username');

    if (grecaptcha.getResponse()) {
        if (validateUsername(username.value)) {
            document.getElementById('user_err').classList.remove("error_msg_show");
            if (validateEmail(email.value)) {
                document.getElementById('email_err').classList.remove("error_msg_show");
                if (validatePassword(password.value)) {
                    document.getElementById('pass_err').classList.remove("error_msg_show");
                    if (validatePhone(phone.value)) {

                        document.getElementById('phone_err').classList.remove("error_msg_show");
                        window.location.href = "home/home.html";
                    }
                    else {
                        phone.focus();
                        document.getElementById('phone_err').classList.add("error_msg_show");
                        // alert("enter your phone correctly")
                    }

                }
                else {
                    password.focus();
                    document.getElementById('pass_err').classList.add("error_msg_show");
                    // alert("please enter password more than 6 digits");
                }
            }
            else {
                email.focus();
                document.getElementById('email_err').classList.add("error_msg_show");
                // alert('Please provide a valid email address');
            }
        }
        else {
            username.focus();
            document.getElementById('user_err').classList.add("error_msg_show");
            //alert("enter your username correctly")
        }
    }
    else {
        alert("verify captcha")
    }



    function validateEmail(email) {

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            email.focus;
            return false;
        }
        return true;

    }

    function validatePassword(password) {

        // console.log(password)
        if (password.length >= 6) {
            return true;
        }
        return false;
    }
    function validateUsername(username) {

        var filter = /^[a-zA-Z\-]+$/;
        if (!filter.test(username)) {
            username.focus;
            return false;
        }
        return true;
    }


    function validatePhone(phone) {
        console.log(phone)
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(phone)) {
            phone.focus;
            console.log(phone)
            return false
        }
        return true;
    }

}





