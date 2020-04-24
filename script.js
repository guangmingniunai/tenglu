/*__POPCODESTART__*/
$(".login").click(function () {
  var save = $("input").val();
  $(".input-group").text(save);
  $(".login-text").text("恭喜你！登录成功");
});
$(".clear").click(function () {
  var save1 = $("input").val();
  $(":text").val("");
});