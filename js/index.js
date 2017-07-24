$(window).resize(function() {
  //update stuff
});

//Change pos/background/padding/add shadow on nav when scroll event happens
$(function(){
	var navbar = $('.navbar');
	var navDropdown = $('.dropdown-menu');

	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
			navDropdown.removeClass('nav-dropdown-scroll');
			$('.top').hide();
		} else {
			navbar.addClass('navbar-scroll');
			navDropdown.addClass('nav-dropdown-scroll');
			$('.top').show();
		}
	});
	$('.navbar-toggle').click(function(){
		if($(window).scrollTop() <= 40){
		   navbar.addClass('navbar-scroll');
	    }
	});
});


//Close collapse nav when scroll spy page link is clicked
$('.navbar-nav a[href*="#spy"]').click(function(){
	$('.navbar-collapse').collapse('hide');
	if($(window).scrollTop() <= 40){
	   $('.navbar').removeClass('navbar-scroll');
	}
});


//Get height of col next to img col and apply a fixed height for flexbox to work correctly.
$(function(){
	var flexColHeight = $('.to-match').height();
	var flexCol = $('.css-img-wrapper');

	flexCol.css('height', flexColHeight);
});




$(document).ready(function(){
 /* $('.owl-carousel').owlCarousel({
        items: 2,
        margin: 56,
        center:true,
        nav : true,
        loop:true,
        dots: true
      });
*/
  $(".owl-next").click();

	var i = 0;
	setInterval(function(){
			var index = parseInt($(".active.center").find("img").data("index"));
			var x = $(".active.center").find("img");
	    var img = $(".active.center").find("img").data("img");
			i = (index>=img.length) ? 0 : index;
	    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	    $(x).removeClass("animated fadeOut zoomIn");
	    $(x).addClass("animated fadeOut").one(animationEnd, function() {
	      $(this).attr("src",img[i]);
				i++;
				$(".active.center").find("img").data("index",i);
	      $(this).removeClass('fadeOut').addClass("zoomIn").one(animationEnd, function() {
	        $(this).removeClass('animated zoomIn');
	      });
	    });
	},5000)

});
