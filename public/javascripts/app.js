$(document).ready(function(){
	$(window).scroll(function(){
     var top=$(window).scrollTop()
     console.log(top)
     /*put your color in background color */
     if(top>10){ 
     	$('.home-menu').css('background-color','#ffe4e1');
     	$('.home-menu').css('boxShadow','0 1px 1px rgba(0,0,0, 0.10)');
      $('.home-menu .pure-menu-heading').css('color', '#000000');
      $('.home-menu .pure-menu-heading').css('opacity', '0.7');
      $('.pure-menu-link').css('color','#000000');
     }
     else if(top == 0){ 
     	$('.home-menu').css('boxShadow','0px 0px 0px 0px'); 
     	$('.home-menu').css('background-color','Transparent');
     	$('.home-menu .pure-menu-heading').css('color','#ffffff');
          $('.pure-menu-link').css('color','#ffffff');
     }
 	})



});

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});

$(function () {
    var events = $('#events');
    var backgrounds = [
      'url(/images/events.jpg)',
      'url(/images/climate.jpg)',
      'url(/images/gender.jpg)',
      'url(/images/heshe.jpg)',];
    var current = 0;

    function nextBackground() {
        events.css(
            'background-image',
        backgrounds[current = ++current % backgrounds.length]);
        events.css('background-position', 'center');
        setTimeout(nextBackground, 3000);
    }
    setTimeout(nextBackground, 5000);
    events.css('background', backgrounds[0]);
});