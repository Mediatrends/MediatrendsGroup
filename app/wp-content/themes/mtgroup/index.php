<?php get_header(); ?>

	<main class="main-box" role="main">
		<!-- section -->
		<section class="home"> 
			
			<video class="video-loop" preload="auto" loop autoplay>
				<source type="video/mp4" src="http://ak1.picdn.net/shutterstock/videos/6258950/preview/stock-footage-friends-with-sparklers-dancing-in-slow-motion.mp4">
				<source type="video/webm" src="http://ak1.picdn.net/shutterstock/videos/6258950/preview/stock-footage-friends-with-sparklers-dancing-in-slow-motion.webm">
				<span title="No video playback capabilities, please download the video below"></span>
			</video>

			<?php get_template_part('loop'); ?>

		</section>

		<section class="quienes-somos" name="q-somos" id="q-somos"> 

			<?php get_template_part('loop-qs'); ?>

		</section>

		<section class="clientes" name="n-clientes" id="n-clientes"> 

			<?php get_template_part('loop-clientes'); ?>

		</section>

		<section class="contactos" name="contacto" id="contacto">
			
			<?php get_template_part('loop-contacto'); ?>

		</section>
		<!-- /section -->
	</main>


<?php get_footer(); ?>
