function change_theme(theme){
  if(theme == 'system'){
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
  }else{
    document.getElementById('html').classList.remove("theme-light", "theme-dark");
    document.getElementById('html').classList.add(theme);
  }
}

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

var _h2 = document.getElementsByTagName("h2");
for(var i = 0; i < _h2.length; ++i){
    _h2[i].classList.add("Title", "4");
}
var _h3 = document.getElementsByTagName("h3");
for(var i = 0; i < _h3.length; ++i){
    _h2[i].classList.add("Title", "5");
}
var _h4 = document.getElementsByTagName("h4");
for(var i = 0; i < _h4.length; ++i){
    _h2[i].classList.add("Title", "6");
}
