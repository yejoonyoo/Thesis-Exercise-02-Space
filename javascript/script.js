document.addEventListener('scroll', function(){
  console.log($(window).scrollTop());
  if ($(window).scrollTop() < 150){
    $('.active').removeClass('active');
    $('#1').addClass('active');
  }
  if ($(window).scrollTop() >= 150 && $(window).scrollTop() < 300){
    $('.active').removeClass('active');
    $('#2').addClass('active');
  }
  if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 450){
    $('.active').removeClass('active');
    $('#3').addClass('active');
  }
  if ($(window).scrollTop() >= 450 && $(window).scrollTop() < 600){
    $('.active').removeClass('active');
    $('#4').addClass('active');
  }
  if ($(window).scrollTop() >= 600 && $(window).scrollTop() < 750){
    $('.active').removeClass('active');
    $('#5').addClass('active');
  }
  if ($(window).scrollTop() >= 750 && $(window).scrollTop() < 900){
    $('.active').removeClass('active');
    $('#6').addClass('active');
  }
  if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 1050){
    $('.active').removeClass('active');
    $('#7').addClass('active');
  }
  if ($(window).scrollTop() >= 1050 && $(window).scrollTop() < 1200){
    $('.active').removeClass('active');
    $('#8').addClass('active');
  }
  if ($(window).scrollTop() >= 1200 && $(window).scrollTop() < 1350){
    $('.active').removeClass('active');
    $('#9').addClass('active');
  }
  if ($(window).scrollTop() >= 1350 && $(window).scrollTop() < 1500){
    $('.active').removeClass('active');
    $('#10').addClass('active');
  }
  if ($(window).scrollTop() >= 1500 && $(window).scrollTop() < 1650){
    $('.active').removeClass('active');
    $('#11').addClass('active');
  }
  if ($(window).scrollTop() >= 1650 && $(window).scrollTop() < 1800){
    $('.active').removeClass('active');
    $('#12').addClass('active');
  }
  if ($(window).scrollTop() >= 1800 && $(window).scrollTop() < 1950){
    $('.active').removeClass('active');
    $('#13').addClass('active');
  }
  if ($(window).scrollTop() >= 1950 && $(window).scrollTop() < 2100){
    $('.active').removeClass('active');
    $('#14').addClass('active');
  }
  if ($(window).scrollTop() >= 2100 && $(window).scrollTop() < 2250){
    $('.active').removeClass('active');
    $('#15').addClass('active');
  }
  if ($(window).scrollTop() >= 2250){
    $('.active').removeClass('active');
    $('#1').addClass('active');
  }
});
