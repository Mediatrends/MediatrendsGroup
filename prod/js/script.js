(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		var controller;
		controller = new ScrollMagic();

		var tween = TweenMax.to(".logo", 1, {scale: 0.6,marginTop: -41});

		var tween1 = TweenMax.fromTo("#header", 1, {height: 115},{height:100});
		
		var scene = new ScrollScene().setPin("#header", {pushFollowers: false});
		var scene0 = new ScrollScene({triggerElement:"#logo-active"})
			.setTween(tween);
		var scene1 = new ScrollScene({triggerElement:"#logo-active"})
			.setTween(tween1);

		controller.addScene([
			scene,
			scene0
			//scene1
		]);
		//show indicators (requires debug extension)
		scene.addIndicators();


		//load images black & white
		$(".ajaxTrigger").on("click",function() {
			$.ajax({
				url:"ajax-contents.html",
				success: function ( data ) {
					$("#wrapper").append(data);
					$('.bwWrapper').BlackAndWhite({
						hoverEffect:true,
						webworkerPath: 'src/',
						intensity:1,
						onImageReady:function(img){
							$(img).parent().animate({
								opacity:1
							});
						}
					});

				}
			});
		});

		
	});
	
})(jQuery, this);