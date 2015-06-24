// JavaScript Document

var main = function () {
 "use strict";

 var addCommentFromInputBox = function () {
  if ($(".comment-input input").val() !== "") {
   var new_comment = $("<p>").text($(".comment-input input").val());
   // что бы результат отображался плавно, сначала скрываем строку
   // а затем ее проявляем функцией fadeIn()
   new_comment.hide();
   $(".comments").append(new_comment);
   new_comment.fadeIn();
   $(".comment-input input").val("");
  }
 };

 // обрабатываем клик на кнопке как окончание ввода текста в поле <input>
 $(".comment-input button").on("click", function (event){ addCommentFromInputBox(); });

// обрабатываем нажатие клавиши Enter как окончание ввода текста в поле <input>
 $(".comment-input input").on("keypress", function (event) {
  // если нажата клавиша Enter, то выполняем отображение коммента
  if (event.keyCode === 13) addCommentFromInputBox();
 });
};

$(document).ready(main);

