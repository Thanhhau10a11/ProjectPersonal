$(document).ready(function() {
    $('#registerForm').submit(function(e) {
    e.preventDefault();
    let content =$('#contact').val();
    let email = $('#email').val();
    let phone = $('#number_confirmation').val();
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phonePattern = /^\d{10}$/;
    let count=0;
    if (!email.match(emailPattern)) {

        count+=1;
        $('#email + .form-message').text('Email không hợp lệ');
    }
    if (!phone.match(phonePattern)) {
        count+=1;
        $('#number_confirmation + .form-message').text('Số điện thoại không hợp lệ');
    }
    if(content ==""){
        count+=1;
        $('#contact + .form-message').text('Nội dung không được để trống');
    }
    if (count>0)
        return;
    alert("Thành công!!!")
    window.location.href = 'index.html';
    });
})

