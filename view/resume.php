	<?php include(VIEW_INCLUDE_PATH.'sections/meta.inc.php'); ?>
	<body data-spy="scroll" data-target=".navbar-collapse">

		<div id="top" class="jumbotron">
			<div class="container">
				<h1><?= $profile->full_name; ?><small><?= $profile->description; ?></small></h1>
			</div>
			<div class="overlay"></div>
			<a class="down-arrow hidden-phone" href="#about-derek"><span class="icon-arrow-down"></span></a>
		</div>

		<nav class="navbar scroll-down" role="navigation">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">Menu</button>
			<div class="collapse navbar-collapse">
				<ul class="nav medium-block-grid-5">
					<li><a href="#about-derek">About <?= $profile->first_name; ?></a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#qualifications">Qualifications</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#more-info">More Info</a></li>
				</ul>
			</div>
		</nav>
		
		<div class="background-yellow">
			<div id="about-derek" class="container">
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
			<div id="more-info" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/more.inc.php'); ?>
			</div>
		</div>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="<?= VIEW_PATH; ?>js/script.js?v=4"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
		
	</body>
</html>