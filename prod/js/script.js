(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		var controller;
		controller = new ScrollMagic();

		var tween = TweenMax.to(".logo", 1, {scale: 0.6,marginTop: -41});

		var tween1 = TweenMax.fromTo("#header", 0.5, {height: 115},{height:100});

		var tween3 = TweenMax.to(".float-contact", 0.5, {opacity:1});

		var tween2 = new TimelineMax ()
				.add([
					TweenMax.fromTo(".contactos .titles", 1, {top: 100}, {top: -20, ease: Linear.easeNone}),
					TweenMax.fromTo(".contactos .image img", 1, {top: -50}, {top: -10, ease: Linear.easeNone})
				]);
		
		var scene = new ScrollScene().setPin("#header", {pushFollowers: false});

		var scene0 = new ScrollScene({triggerElement:"#logo-active"})
			.setTween(tween);

		var scene1 = new ScrollScene({triggerElement:"#logo-active"})
			.setTween(tween1);

		var scene2 = new ScrollScene({triggerElement:".contactos"})
			.setTween(tween2);

		var scene3 = new ScrollScene({triggerElement:"#logo-active"})
			.setTween(tween3);

		controller.addScene([
			scene,
			scene0,
			scene1,
			scene2,
			scene3
		]);
		//show indicators (requires debug extension)
		scene.addIndicators();


		//load images black & white
		$('.gallery-icon').BlackAndWhite({
	        hoverEffect : true,
	        webworkerPath : false,
	        invertHoverEffect: false,
	        intensity:1,
	        speed: {
	            fadeIn: 50, // 200ms for fadeIn animations
	            fadeOut: 100 // 800ms for fadeOut animations
	        },
	        onImageReady:function(img) {
	            // this callback gets executed anytime an image is converted
	        }
	    });

		//scroll up
	    $('#scroll-up').click(function(){
	    	var body = $("html, body");
			body.animate({scrollTop:0},{duration:1000,easing:'swing'});
	    });

	    //contact appers
	    $('.open-form').toggle(function(){
	    	$('.contact-form').animate({
	    		height:444
	    	},1000, function(){
	    		$('.indicator').fadeIn();
	    	});
	    }, function(){
	    	$('.indicator').fadeOut(function(){
	    		$('.contact-form').animate({
		    		height:0
		    	},1000);
	    	});
	    	
	    });

	    $('.open-menu').click(function(){
	    	var body = $("html, body");
	    	$('.show-menu').fadeIn(400,function(){
	    		body.animate({scrollTop:0},{duration:500,easing:'swing'});
	    	});
	    });

	    $('nav ul li a').click(function(){
		    $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top
		    }, 500,function(){
		    	$('.show-menu').fadeOut();
		    });
		    return false;
		});
	});
	
})(jQuery, this);