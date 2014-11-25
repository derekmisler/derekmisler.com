<!doctype html>
<html lang="en-us" itemscope itemtype="http://schema.org/Article">
	<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#">

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<meta name="mobile-web-app-capable" content="yes">
		<title><?= $profile->full_name; ?> | <?= $profile->description; ?></title>
		<meta name="description" content="<?= $profile->description; ?>">
		<meta name="google-site-verification" content="oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk" />

		<!-- Schema.org markup for Google+ -->
		<meta itemprop="name" content="<?= $profile->full_name; ?>">
		<meta itemprop="description" content="<?= $profile->description; ?>">
		<meta itemprop="image" content="http://www.derekmisler.com/view/images/google-plus.jpg">
		<link rel="publisher" href="https://plus.google.com/110617470325528028773/">

		<!-- Twitter Card data -->
		<meta name="twitter:card" content="summary_large_image ">
		<meta name="twitter:site" content="@derekmisler">
		<meta name="twitter:title" content="<?= $profile->full_name; ?>">
		<meta name="twitter:description" content="<?= $profile->description; ?>">
		<meta name="twitter:creator" content="@derekmisler">
		<meta name="twitter:image" content="http://www.derekmisler.com/view/images/twitter-card.jpg">

		<!-- Open Graph data -->
		<meta property="og:title" content="<?= $profile->full_name; ?>">
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://www.derekmisler.com/">
		<meta property="og:image" content="http://www.derekmisler.com/view/images/facebook.jpg">
		<meta property="og:description" content="<?= $profile->description; ?>">
		<meta property="og:site_name" content="<?= $profile->full_name; ?>">
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
			ga('require', 'displayfeatures');
			ga('send', 'pageview');

		</script>
	</head>
