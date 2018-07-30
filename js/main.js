$(document).ready(function(){
    navBg();
});
$(window).scroll(function(){
   navBg();
}); 


function navBg(){
    var navHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= navHeight) {
    $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');   
    }
}