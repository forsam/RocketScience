$(document).ready(function(){

var startgame = $("#startgame");
var landingPage = $("#landingPage");
var gamingPage = $("#gamingPage");
var pagename = $("#pagename");
var name;

startgame.click(function(){
  name = $("#name").val();
  console.log(name);
  landingPage.hide();
  gamingPage.show();
  pagename.text('Gaming Page')
});
});
