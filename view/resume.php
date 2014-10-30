<!doctype html>
<html lang="en-us" itemscope itemtype="http://schema.org/Article">
	<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#">

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<title>Derek Misler | Developer of Web Things & Designer of Graphic Things</title>
		<meta name="description" content="Developer of Web Things & Designer of Graphic Things">

		<!-- Schema.org markup for Google+ -->
		<meta itemprop="name" content="Derek Misler by Derek Misler">
		<meta itemprop="description" content="Developer of Web Things & Designer of Graphic Things">
		<meta itemprop="image" content="http://derekmisler.com/images/google-plus.jpg">
		<link rel="publisher" href="http://plus.google.com/+DerekMisler/">

		<!-- Twitter Card data -->
		<meta name="twitter:card" content="summary_large_image ">
		<meta name="twitter:site" content="@derekmisler">
		<meta name="twitter:title" content="Derek Misler">
		<meta name="twitter:description" content="Developer of Web Things & Designer of Graphic Things">
		<meta name="twitter:creator" content="@derekmisler">
		<meta name="twitter:image" content="http://derekmisler.com/images/twitter-card.jpg">

		<!-- Open Graph data -->
		<meta property="og:title" content="Derek Misler">
		<meta property="og:type" content="article" />
		<meta property="og:url" content="http://derekmisler.com/">
		<meta property="og:image" content="http://derekmisler.com/images/facebook.jpg">
		<meta property="og:description" content="Developer of Web Things & Designer of Graphic Things">
		<meta property="og:site_name" content="Derek Misler">
		<meta property="article:published_time" content="2014-10-01T05:59:00+05:00" />
		<meta property="article:modified_time" content="2014-10-26T19:08:47+05:00" />
		<meta property="article:section" content="Resume" />
		<meta property="fb:admins" content="812785510">
		
		<!-- core CSS -->
		<link href="http://fonts.googleapis.com/css?family=Lato:300,300italic,700,700italic|Playfair+Display:700" rel="stylesheet" type="text/css">
		<link href="<?= VIEW_PATH; ?>style.css" rel="stylesheet" />
		
		<link rel="shortcut icon" href="<?= BASE; ?>favicon.ico" type="image/x-icon" />
		<link rel="icon" href="<?= BASE; ?>favicon.ico" type="image/x-icon" />

		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-17984733-3', 'auto');
			ga('send', 'pageview');

		</script>
	</head>
	<body data-spy="scroll" data-target=".navbar-collapse">

		<div id="top" class="jumbotron" data-src="<?= $current_header['source']; ?>" data-position="<?= $current_header['position']; ?>">
			<div class="container">
				<h1><?= $profile->full_name; ?><small>Developer of Web Things &amp; Designer of Graphic Things</small></h1>
			</div>
			<div class="overlay"></div>
		</div>

		<nav class="navbar navbar-default scroll-down" role="navigation">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle icon-arrow-down" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
				</button>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav medium-block-grid-5">
					<li class="active"><a href="#profile">About <?= $profile->first_name; ?></a></li>
					<li><a href="#experiences">Experience</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#more">More Info</a></li>
				</ul>
			</div>
		</nav>
		
		<div class="background-yellow">
			<div id="profile" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/profile.inc.php'); ?>
			</div>
		</div>
		
		<div id="experiences" class="container">
			<?php include(VIEW_INCLUDE_PATH.'sections/experiences.inc.php'); ?>
		</div>
		
		<div class="background-yellow">
			<div id="skills" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/skills.inc.php'); ?>
			</div>
		</div>
		
		<div id="projects" class="container">
			<?php include(VIEW_INCLUDE_PATH.'sections/projects.inc.php'); ?>
		</div>
		
		<div class="background-gray">
			<div id="more" class="container">
				<?php include(VIEW_INCLUDE_PATH.'sections/more.inc.php'); ?>
			</div>
		</div>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="<?= VIEW_PATH; ?>js/script.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
		
	</body>
</html>