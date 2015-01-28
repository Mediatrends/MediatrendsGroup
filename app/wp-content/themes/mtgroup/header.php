<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		
		<?php wp_head(); ?>
		
	</head>
	<body <?php body_class(); ?>>
		<?php include (TEMPLATEPATH . '/svg_material.php'); ?>
		<div id="logo-active"></div>
		<!-- wrapper -->
		<div class="wrapper" id="start-pin">

			<!-- header -->
			<header class="header clear" role="banner" id="header">

					<!-- logo -->
					<div class="logo">
						<a href="<?php echo home_url(); ?>">
							<svg viewBox="0 0 251.428 252.757">
								<use xlink:href="#svg_logo-mtg" />
							</svg>
						</a>
					</div>
					<!-- /logo -->

					<!-- nav -->
					<!--nav class="nav" role="navigation">
						<?php html5blank_nav(); ?>
					</nav-->
					<!-- /nav -->

			</header>
			<!-- /header -->

			
