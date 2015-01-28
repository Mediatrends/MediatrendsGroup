			<!-- footer -->
			<footer class="footer" role="contentinfo">

				<ul class="redes-contacto">
					<li><i class="fa fa-facebook"></i></li>
					<li><i class="fa fa-twitter"></i></li>
					<li><i class="fa fa-instagram"></i></li>
				</ul>

				<div class="service-footer">
					
					<div class="btn_contact"><a href="">ubicación</a></div>
					<div class="btn_contact open-form"><span>contacto</span></div>

				</div>

				<div class="float-contact">
					<div class="btns" id="scroll-up"><i class="fa fa-chevron-up"></i></div>
					<div class="btns open-form"><i class="fa fa-envelope"></i></div>

					<div class="contact-form">
						<div>
							<i class="fa fa-envelope"></i>
							<h4>contactanos</h4>
							<?php echo do_shortcode( '[contact-form-7 id="82" title="Contacto MTGroup"]' ); ?>
						</div>

					</div>
					<i class="fa fa-caret-down indicator"></i>
				</div>

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->
		<?php wp_footer(); ?>

		<script src="<?php echo get_template_directory_uri(); ?>/js/TweenMax.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.scrollmagic.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.scrollmagic.debug.js"></script>
		<script src="http://gianlucaguarini.github.io/jQuery.BlackAndWhite/src/jquery.BlackAndWhite.js"></script>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
