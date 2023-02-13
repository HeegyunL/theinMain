$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $("header").css("background" , "rgba(252, 251, 251) ");
        $(".h1-s2-c1").css("color" , "black");
        $(".h-icon").css("color" , "black");
        $(".logo1").attr("src","../img/logo-dark.png");
        $("header").css("border-bottom" , "1.5px solid #cecece");
        
      }
      else{
        $("header").css("background" , "");
        $(".h1-s2-c1").css("color" , "white");
        $(".h-icon").css("color" , "");
        $(".logo1").attr("src","../img/logo-white.png");
        $("header").css("border-bottom" , "")
      }
    })
    })


  
  window.onload = function(){
var mql = window.matchMedia("screen and (max-width: 480px)");
const nav1 = document.getElementById('header1');
const nav2 = document.getElementById('header2-back');
const logo1 = document.getElementById('logo');
if(mql.matches){
}
else{
    nav1.addEventListener('mouseenter',()=>{
    nav1.style.display='none';
    nav2.style.display='flex';
})
nav2.addEventListener('mouseleave',()=>{
    nav1.style.display='flex';
    nav2.style.display='none';
})
var headNav = $('#nav1');
$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        headNav.addClass('sticky');
    }else
    headNav.removeClass('sticky');
})
}}