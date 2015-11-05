<h2>Learn More About <?= $profile->full_name; ?></h2>
<hr />

<div class="row">
	<div class="col-md-12">
		<ul class="small-block-grid-2 medium-block-grid-8 text-center">
			<li>
				<a title="Email <?= $profile->full_name; ?>" href="mailto:<?= $contact->email; ?>" target="_blank"><span class="icon-mail"></span></a>
			</li>
			<li>
				<a title="Click to call <?= $contact->phonedisplay; ?>." href="tel:<?= $contact->phone; ?>"><span class="icon-phone"></span></a>
			</li>
			<li>
				<a class="hidden-xs hidden-sm" href="<?= VIEW_PATH; ?>resume/Derek-Misler-resume.pdf" download="Derek-Misler-resume.pdf"><span class="icon-mouse"></span></a>
				<a class="visible-xs visible-sm" title="PDF Resume opens in a new window" href="<?= VIEW_PATH; ?>resume/Derek-Misler-resume.pdf" target="_blank"><span class="icon-new-window"></span></a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s LinkedIn profile" href="<?= $contact->linkedin; ?>" target="_blank"><span class="icon-linkedin"></span></a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s GitHub profile" href="<?= $contact->github; ?>" target="_blank"><span class="icon-github"></span></a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s Flickr profile" href="<?= $contact->flickr; ?>" target="_blank"><span class="icon-flickr"></span></a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s Twitter" href="<?= $contact->twitter; ?>" target="_blank"><span class="icon-twitter"></span></a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s StackOverflow profile" href="<?= $contact->stackoverflow; ?>" target="_blank"><span class="icon-stackoverflow"></span></a>
			</li>
		</ul>
	</div>
</div>