$(document).ready(function () {
  $("#btnRegister").click(function (event) {
    event.preventDefault();
    var fullName = $("#fullName").val();
    var email = $("#email").val();
    var phoneNo = $("#phoneNo").val();
    var newUserName = $("#newUserName").val();
    var newPassword = $("#newPassword").val();
    var rePassword = $("#rePassword").val();

    $(".text-danger").text("");
    if (fullName === "") {
      $("#validateFullName").text("Vui lòng nhập họ và tên");
      return;
    } else {
      const regex = new RegExp("/^[p{L}s']+$/u");
      const check = !regex.test(fullName);
      if (check) {
        console.log("Wrong regex");
        $("#validateFullName").text("Vui lòng nhập họ và tên hợp lệ");
        return;
      }
    }
    if (email === "") {
      $("#validateEmail").text("Vui lòng nhập địa chỉ email");
      return;
    } else {
      const regex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$");
      if (!regex.test(email)) {
        $("validateEmail").text("Vui lòng nhập email hợp lệ");
      }
    }
    if (phoneNo === "") {
      $("#validatePhoneNo").text("Vui lòng nhập số điện thoại");
      return;
    }
    if (newUserName === "") {
      $("#validateNewUserName").text("Vui lòng nhập tài khoản");
      return;
    }
    if (newPassword === "") {
      $("#validateNewPassword").text("Vui lòng nhập mật khẩu");
      return;
    } else {
      const regex = new RegExp("/^[p{L}s']+$/u");
      const check = !regex.test(fullName);
      if (check) {
        console.log("Wrong regex");
        $("#validateNewPassword").text("Vui lòng nhập mật khẩu mạnh");
        return;
      }
    }
    if (rePassword === "") {
      $("#validateRePassword").text("Vui lòng nhập lại mật khẩu");
      return;
    }
    else {
      
    }
    if (newPassword !== rePassword) {
      $("#validateRePassword").text("Mật khẩu không khớp");
      return;
    }

    window.alert("Đăng ký thành công");
    window.location.href = "/";
  });
});
