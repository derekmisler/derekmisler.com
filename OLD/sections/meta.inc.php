<!doctype html>
<html lang="en-us">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    <title><?= $profile->full_name; ?> | <?= $profile->description; ?></title>
    <meta name="description" content="<?= $profile->meta_description; ?>">
    <link rel="canonical" href="<?= $contact->website; ?>" />
    <meta name="google-site-verification" content="oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk" />
    <link rel="publisher" href="https://plus.google.com/110617470325528028773/">

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary_large_image ">
    <meta name="twitter:site" content="@derekmisler">
    <meta name="twitter:title" content="<?= $profile->full_name; ?> | <?= $profile->description; ?>">
    <meta name="twitter:description" content="<?= $profile->meta_description; ?>">
    <meta name="twitter:creator" content="@derekmisler">
    <meta name="twitter:image" content="<?= IMAGES_PATH; ?>twitter-card.jpg">

    <!-- Open Graph data -->
    <meta property="og:title" content="<?= $profile->full_name; ?> | <?= $profile->description; ?>">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?= $contact->website; ?>">
    <meta property="og:image" content="<?= IMAGES_PATH; ?>facebook.jpg">
    <meta property="og:description" content="<?= $profile->meta_description; ?>">
    <meta property="og:site_name" content="<?= $profile->full_name; ?> | <?= $profile->description; ?>">
    <meta property="fb:admins" content="812785510">

    <!-- Structured Schema.org Markup -->
    <script type="application/ld+json">
    {
      "@context" : "http://schema.org",
      "@type" : "Person",
      "name" : "<?= $profile->full_name; ?>",
      "description" : "<?= $profile->meta_description; ?>",
      "image" : "<?= IMAGES_PATH; ?>google-plus.jpg",
      "jobTitle" : "<?= $profile->description; ?>",
      "url" : "<?= $contact->website; ?>",
      "email" : "<?= $contact->email; ?>",
      "telephone" : "<?= $contact->phonedisplay; ?>",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "<?= $profile->current_location->housenumber; ?> <?= $profile->current_location->street; ?>",
        "addressLocality": "<?= $profile->current_location->city; ?>",
        "addressRegion": "<?= $profile->current_location->state; ?>",
        "postalCode": "<?= $profile->current_location->zipcode; ?>"
      },
      "sameAs" : [
        "<?= $contact->linkedin; ?>",
        "<?= $contact->github; ?>",
        "<?= $contact->twitter; ?>",
        "<?= $contact->instagram; ?>",
        "<?= $contact->flickr; ?>",
        "<?= $contact->stackoverflow; ?>",
        "<?= $contact->pinterest; ?>"
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context" : "http://schema.org",
      "@type" : "WebSite",
      "name" : "<?= $profile->full_name; ?>",
      "alternateName" : "<?= $profile->first_name; ?>",
      "url" : "<?= $contact->website; ?>"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "url": "<?= $contact->website; ?>",
      "logo": "<?= IMAGES_PATH; ?>google-plus.jpg",
      "contactPoint" : [{
        "@type" : "ContactPoint",
        "telephone" : "<?= $contact->phone; ?>",
        "contactType" : "technical support"
      }]
    }
    </script>

    <!-- icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="<?= IMAGES_PATH; ?>apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?= IMAGES_PATH; ?>apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?= IMAGES_PATH; ?>apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?= IMAGES_PATH; ?>apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?= IMAGES_PATH; ?>apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?= IMAGES_PATH; ?>apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?= IMAGES_PATH; ?>apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?= IMAGES_PATH; ?>apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= IMAGES_PATH; ?>apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?= IMAGES_PATH; ?>android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= IMAGES_PATH; ?>favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?= IMAGES_PATH; ?>favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= IMAGES_PATH; ?>favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?= IMAGES_PATH; ?>ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- core CSS -->
    <link href="http://fonts.googleapis.com/css?family=Lato:300,300italic,700,700italic|Playfair+Display:700" rel="stylesheet" type="text/css">
    <link href="<?= STYLE_PATH; ?>style.css" rel="stylesheet" />

  </head>
