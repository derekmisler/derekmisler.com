<!doctype html>
<html lang="en-us" itemscope itemtype="http://schema.org/Person">
	<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#">

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<meta name="mobile-web-app-capable" content="yes">
		<title><?= $profile->full_name; ?> | <?= $profile->description; ?></title>
		<meta name="description" content="<?= $profile->full_name; ?> is a <?= $profile->description; ?>">
		<link rel="canonical" href="http://www.derekmisler.com/" />
		<meta name="google-site-verification" content="oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk" />

		<!-- Schema.org markup for Google+ -->
		<meta itemprop="name" content="<?= $profile->full_name; ?>">
		<meta itemprop="description" content="<?= $profile->biography; ?>">
		<meta itemprop="url" content="http://www.derekmisler.com/">
		<meta itemprop="email" content="<?= $contact->email; ?>">
		<meta itemprop="telephone" content="<?= $contact->phone; ?>">
		<meta itemprop="image" content="<?= VIEW_PATH; ?>images/google-plus.jpg">
		<link rel="publisher" href="https://plus.google.com/110617470325528028773/">

		<!-- Twitter Card data -->
		<meta name="twitter:card" content="summary_large_image ">
		<meta name="twitter:site" content="@derekmisler">
		<meta name="twitter:title" content="<?= $profile->full_name; ?>">
		<meta name="twitter:description" content="<?= $profile->biography; ?>">
		<meta name="twitter:creator" content="@derekmisler">
		<meta name="twitter:image" content="<?= VIEW_PATH; ?>images/twitter-card.jpg">

		<!-- Open Graph data -->
		<meta property="og:title" content="<?= $profile->full_name; ?>">
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://www.derekmisler.com/">
		<meta property="og:image" content="<?= VIEW_PATH; ?>images/facebook.jpg">
		<meta property="og:description" content="<?= $profile->biography; ?>">
		<meta property="og:site_name" content="<?= $profile->full_name; ?> | <?= $profile->description; ?>">
		<meta property="fb:admins" content="812785510">

		<!-- icons -->
		<link rel="apple-touch-icon" sizes="57x57" href="<?= VIEW_PATH; ?>images/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?= VIEW_PATH; ?>images/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?= VIEW_PATH; ?>images/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?= VIEW_PATH; ?>images/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?= VIEW_PATH; ?>images/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?= VIEW_PATH; ?>images/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="<?= VIEW_PATH; ?>images/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="<?= VIEW_PATH; ?>images/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="<?= VIEW_PATH; ?>images/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="<?= VIEW_PATH; ?>images/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?= VIEW_PATH; ?>images/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="<?= VIEW_PATH; ?>images/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?= VIEW_PATH; ?>images/favicon-16x16.png">
		<link rel="manifest" href="<?= VIEW_PATH; ?>images/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="<?= VIEW_PATH; ?>images/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">
	
		<!-- core CSS -->
		<link href="http://fonts.googleapis.com/css?family=Lato:300,300italic,700,700italic|Playfair+Display:700" rel="stylesheet" type="text/css">
		<link href="<?= VIEW_PATH; ?>style.css" rel="stylesheet" />

	</head>
