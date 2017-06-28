
/* $("a.navbar-toggle").click(function(e){
     ${"div.navbar-collapse"}.show();
     e.stopPropagation();

$("div.navbar-collapse").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $("div.navbar-collapse").hide();
});*/





/* $(document).mouseup(function(e) 
{
     var container = $("div.navbar-collapse");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        // $("div.collapse").unbind( 'click', clickDocument );
        container.hide();
    }
});*/

 


//Scroll to the top of document

/*function topFunction() {
 //   document.body.scrollTop = 0;
   // document.documentElement.scrollTop = 0;
} */



//Smooth Scrolling To Internal Links With jQuery 
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    },1500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//Smooth scroll with back to top with JQuery
jQuery(document).ready(function($){
    
        $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        //$("html, body").scrollTop(0); //For without animation
        return false;
    });
});


//Activate scrollspy to highlight nav item when scrolled over
$("body").scrollspy({target: ".navbar"}) 

