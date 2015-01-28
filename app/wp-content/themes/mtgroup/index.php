<?php get_header(); ?>

	<main class="main-box" role="main">
		<!-- section -->
		<section class="home"> 
			
			<video class="video-loop" preload="auto" loop autoplay><source src="https://s3.amazonaws.com/distill-videos/videos/processed/34/State-Fair-2013-HD-2.mp4" type="video/mp4" /><span title="No video playback capabilities, please download the video below"></span></video>

			<?php get_template_part('loop'); ?>

		</section>

		<section class="quienes-somos"> 

			<?php get_template_part('loop-qs'); ?>

		</section>

		<section class="clientes"> 

			<?php get_template_part('loop-clientes'); ?>

		</section>
		<!-- /section -->
	</main>


<?php get_footer(); ?>
