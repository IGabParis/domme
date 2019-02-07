(function($){
  $(function(){

	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

  	var scrollpos = window.scrollY;
	var header = document.getElementById("nav");
	var windowheight = window.innerHeight;
	var headerheight = document.getElementById("nav").offsetHeight;

	function add_class_on_scroll() {
	  header.classList.add("fixed-theme");
	}

	function remove_class_on_scroll() {
	  header.classList.remove("fixed-theme");
	}

	window.addEventListener('scroll', function() {
	  scrollpos = window.scrollY;
	  if (scrollpos > (headerheight)) {
	    add_class_on_scroll();
	  } else {
	    remove_class_on_scroll();
	  }
	});

	
})(jQuery); 