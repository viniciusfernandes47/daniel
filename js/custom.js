$(function() {                      
  $(".nav-item").click(function() {  
    $('.nav-item').removeClass("active");      
    $(this).addClass("active");      
  });
});


$('.listagem_depoimentos').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('#mobile_servicos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
          {
              breakpoint: 768,
              settings: 'unslick'
          }
    ]
  });

  $(".agendar").click(function(){
      $('.agendar_open').toggle("slow");
  });

  $(".previ").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
  });

  $(".nexti").click(function(){
    $("#carouselExampleIndicators").carousel("next");
  });

  $(function() {                      
    $(".carousel-bullets li").click(function() {  
      $('.carousel-bullets li').removeClass("active");      
      $(this).addClass("active");      
    });
  });

  //Sticky header
jQuery(function(){
  createSticky(jQuery("header"));
});

function createSticky(sticky) {
  if (typeof sticky != "undefined") {

      var pos = sticky.offset().top ,
          win = jQuery(window);

      win.on("scroll", function() {

          if( win.scrollTop() > pos ) {
              sticky.addClass("stickyhead");
          } else {
              sticky.removeClass("stickyhead");
          }           
      });         
  }
}

$(".hamburger").click(function()
{
    $(".navigation").toggleClass("open_menu");
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('li.nav-item a').removeClass('active');
  $(this).addClass('active');
  if( target.length ) {
      
      event.preventDefault();
      var top = (target.offset().top) - 140;
      $('html, body').stop().animate({
          scrollTop: top
      }, 1000);
  }
});   


AOS.init();

if($(window).height() > $("body").height()){
  $("footer").css("position", "fixed");
} else {
  $("footer").css("position", "static");
}