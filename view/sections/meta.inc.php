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

		<!-- Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-N2C864"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-N2C864');</script>
		<!-- End Google Tag Manager -->

	</head>
