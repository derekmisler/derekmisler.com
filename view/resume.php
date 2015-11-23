	<?php include(VIEW_INCLUDE_PATH.'sections/meta.inc.php'); ?>
	<body data-spy="scroll" data-target=".navbar-collapse">
		<!-- Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-N2C864"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-N2C864');</script>
		<!-- End Google Tag Manager -->

		<div id="top" class="jumbotron">
			<div class="container">
				<h1><?= $profile->full_name; ?><small><?= $profile->description; ?></small></h1>
			</div>
			<div class="overlay"></div>
			<a class="down-arrow" href="#about-derek-misler"><span class="icon-arrow-down"></span></a>
		</div>

		<nav class="navbar scroll-down" role="navigation">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">Menu</button>
			<div class="collapse navbar-collapse">
				<ul class="nav medium-block-grid-5" vocab="http://schema.org/" typeof="BreadcrumbList">
          <li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="#about-derek-misler"><span property="name">About</span></a><meta property="position" content="1"></li>
					<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="#experience"><span property="name">Experience</span></a><meta property="position" content="2"></li>
					<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="#qualifications"><span property="name">Qualifications</span></a><meta property="position" content="3"></li>
					<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="#projects"><span property="name">Projects</span></a><meta property="position" content="4"></li>
					<li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="#contact"><span property="name">Contact</span></a><meta property="position" content="5"></li>
				</ul>
			</div>
		</nav>

		<div class="background-yellow">
			<div id="about-derek-misler" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/profile.inc.php'); ?>
			</div>
		</div>

		<div id="experience" class="container">
			<?php include(VIEW_INCLUDE_PATH.'sections/experiences.inc.php'); ?>
		</div>

		<div class="background-yellow">
			<div id="qualifications" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/skills.inc.php'); ?>
			</div>
		</div>

		<div id="projects" class="container">
			<?php include(VIEW_INCLUDE_PATH.'sections/projects.inc.php'); ?>
		</div>

		<div class="background-gray">
			<div id="contact" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/more.inc.php'); ?>
			</div>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript" src="<?= SCRIPT_PATH; ?>script.js"></script>

	</body>
</html>
