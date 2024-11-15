$(document).ready(function () {
  $("#btnAcceptOrder").click(function () {
    var fullName = $("#orderFullName").val();
    var phoneNo = $("#orderPhoneNo").val();
    var address = $("#orderAddress").val();

    if (fullName.trim() === "") {
      alert("Vui lòng nhập họ và tên");
      return;
    }

    if (phoneNo.trim() === "") {
      alert("Vui lòng nhập số điện thoại");
      return;
    }

    if (address.trim() === "") {
      alert("Vui lòng nhập địa chỉ");
      return;
    }

    alert("Đặt hàng thành công!");
    window.location.href = '/';
  });
});
