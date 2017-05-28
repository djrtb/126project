//For homepage
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

//for slideshow

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

//For individual pages
(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content  = document.getElementById('main');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

}(this, this.document));