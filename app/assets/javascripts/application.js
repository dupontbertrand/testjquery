// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
//= require bootstrap-sprockets

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.intro-message');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#455F6F');
          $(".imgbrand").css('height', '50px');
          $(".navbar ul li a").css('paddingTop', '20px');
          $(".navbar ul li a").css('paddingBottom', '20px');
          $(".navbar ul li a").css('fontSize', '1.3em');
          $(".navbar-brand").css('paddingTop', '10px');
          $(".navbar ul li a").css('paddingLeft', '15px');
       }
      if(offset.top = 0) {
          $(".navbar-default").css('background-color', 'none');
       }
   });
    }
});
