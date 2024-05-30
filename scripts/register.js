
$(document).ready(function() {
    $('#registerForm').submit(function(e) {
        e.preventDefault();

        let fullname=$('#fullname').val()
        let email = $('#email').val();
        let phone = $('#number_confirmation').val();
        let password = $('#password').val();
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let phonePattern = /^\d{10}$/;
        let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        let count=0;

        if(fullname=="")
            {
                count+=1;
            $('#fullname + .form-message').text('Trường này phải được nhập!');
            }
        if (!email.match(emailPattern)) {
            count+=1;
            $('#email + .form-message').text('Email không hợp lệ!');
        }

        if (!phone.match(phonePattern)) {
            count+=1;
            $('#number_confirmation + .form-message').text('Số điện thoại không hợp lệ!');
        }

        if (!password.match(passwordPattern)) {
            count+=1;
            $('#password + .form-message').text('Mật khẩu không hợp lệ!');
        }

        if (count > 0) {
            return;
        }

        alert("Đăng ký thành công!!!");
        window.location.href = 'index.html';
    });
});
