<h2>About <?= $profile->full_name; ?></h2>

<hr />

<div class="row">
	<div class="col-md-5 col-lg-4 text-center">
		<a title="Email <?= $profile->full_name; ?>" href="mailto:<?= $contact->email; ?>" target="_blank"><img src="<?= IMAGES_PATH; ?>loader.gif" data-src="<?= IMAGES_PATH; ?>derek-misler.jpg" data-src-retina="<?= IMAGES_PATH; ?>retina/derek-misler.jpg" alt="<?= $profile->full_name; ?>" width="200" height="200" /></a>
		<ul class="small-block-grid-1">
			<li>
				<a title="This is where I live."><span class="icon-location-dot"></span>&nbsp;<?= $profile->current_location->city; ?>, <?= $profile->current_location->state; ?></a>
			</li>
			<li>
				<a title="Click to call <?= $contact->phonedisplay; ?>." href="tel:<?= $contact->phone; ?>"><span class="icon-phone"></span>&nbsp;(828) 273-6943</a>
			</li>
			<li>
				<a class="hidden-xs hidden-sm" href="<?= STYLE_PATH; ?>resume/Derek-Misler-resume.pdf" download="Derek-Misler-resume.pdf"><span class="icon-mouse"></span>&nbsp;Download Resume</a>
				<a class="visible-xs visible-sm" title="PDF Resume opens in a new window" href="<?= STYLE_PATH; ?>resume/Derek-Misler-resume.pdf" target="_blank"><span class="icon-new-window"></span>&nbsp; View Resume</a>
			</li>
			<li>
				<a title="Email <?= $profile->full_name; ?>" href="mailto:<?= $contact->email; ?>" target="_blank"><span class="icon-mail"></span>&nbsp;derekmisler@gmail.com</a>
			</li>
		</ul>
	</div>
	
	<div class="col-md-7 col-lg-8">
		
		<p><?= $profile->biography; ?></p>
		<ul class="small-block-grid-1 medium-block-grid-2">
			<li>
				<a title="View <?= $profile->full_name; ?>'s LinkedIn profile" href="<?= $contact->linkedin; ?>" target="_blank"><span class="icon-linkedin"></span>&nbsp;LinkedIn</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s GitHub profile" href="<?= $contact->github; ?>" target="_blank"><span class="icon-github"></span>&nbsp;GitHub</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s StackOverflow profile" href="<?= $contact->stackoverflow; ?>" target="_blank"><span class="icon-stackoverflow"></span>&nbsp;StackOverflow</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s Flickr profile" href="<?= $contact->flickr; ?>" target="_blank"><span class="icon-flickr"></span>&nbsp;Flickr</a>
			</li>
		</ul>
		<h6>This site was built with PHP, HTML5, and Less. <a href="https://github.com/derekmisler/derekmisler.com" target="_blank">Learn more on GitHub.&nbsp;<small><span class="icon-new-window"></span></small></a></h6>
	</div>
</div>
