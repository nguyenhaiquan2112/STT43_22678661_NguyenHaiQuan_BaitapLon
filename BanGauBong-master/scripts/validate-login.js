$(document).ready(function () {
    $('#btnLogin').click(function (event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === '') {
            document.getElementById('validatePassword').innerHTML = '';
            document.getElementById('validateUserName').innerHTML = 'Vui lòng nhập tài khoản';
        }
        else if (password === '') {
            document.getElementById('validateUserName').innerHTML = '';
            document.getElementById('validatePassword').innerHTML = 'Vui lòng nhập mật khẩu';
        }
        else {
            window.location.href = '/';
        }
    });
});
