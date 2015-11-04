<h2>About <?= $profile->full_name; ?></h2>

<hr />

<div class="row">
	<div class="col-md-6 text-center visible-xs visible-sm">
		<a href="https://github.com/derekmisler/derekmisler.com" target="_blank"><img src="<?= VIEW_PATH; ?>images/loader.gif" data-src="<?= VIEW_PATH; ?>images/derek-misler.jpg" data-src-retina="<?= VIEW_PATH; ?>images/retina/derek-misler.jpg" alt="<?= $profile->full_name; ?>" width="200" height="200" /></a>
		<p><a href="https://github.com/derekmisler/derekmisler.com" target="_blank"><span class="icon-new-window"></span>&nbsp;View DerekMisler.com on GitHub.</a></p>
		<p><a href="<?= VIEW_PATH; ?>resume/Derek-Misler-resume.pdf" target="_blank"><span class="icon-mouse"></span>&nbsp;Download PDF Resume.</a></p>
	</div>
	<div class="col-md-6">
		<p><?= $profile->biography; ?></p>
		<div class="row social-links">
			<div class="col-md-12">
				<ul class="small-block-grid-2 medium-block-grid-4 large-block-grid-6 text-center">
					<li>
						<a title="View <?= $profile->full_name; ?>'s LinkedIn profile" href="<?= $contact->linkedin; ?>" target="_blank">
							<span class="icon-linkedin"></span>
						</a>
					</li>
					<li>
						<a title="View <?= $profile->full_name; ?>'s GitHub profile" href="<?= $contact->github; ?>" target="_blank">
							<span class="icon-github"></span>
						</a>
					</li>
					<li>
						<a title="View <?= $profile->full_name; ?>'s StackOverflow profile" href="<?= $contact->stackoverflow; ?>" target="_blank">
							<span class="icon-stackoverflow"></span>
						</a>
					</li>
					<li>
						<a title="View <?= $profile->full_name; ?>'s Flickr profile" href="<?= $contact->flickr; ?>" target="_blank">
							<span class="icon-flickr"></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-md-6 text-center visible-md visible-lg">
		<a href="https://github.com/derekmisler/derekmisler.com" target="_blank"><img src="<?= VIEW_PATH; ?>images/loader.gif" data-src="<?= VIEW_PATH; ?>images/derek-misler.jpg" data-src-retina="<?= VIEW_PATH; ?>images/retina/derek-misler.jpg" alt="<?= $profile->full_name; ?>" width="200" height="200" /></a>
		<p><a href="https://github.com/derekmisler/derekmisler.com" target="_blank"><span class="icon-new-window"></span>&nbsp;View this website on GitHub.</a></p>
		<p><a title="Email <?= $profile->full_name; ?>" href="mailto:<?= $contact->email; ?>" target="_blank"><span class="icon-mail"></span>&nbsp;derekmisler@gmail.com</a></p>
		<p><a href="<?= VIEW_PATH; ?>resume/Derek-Misler-resume.pdf" target="_blank"><span class="icon-mouse"></span>&nbsp;Download Resume</a></p>
		<p><a title="Click to call <?= $profile->phonedisplay; ?>." href="tel:<?= $contact->phone; ?>"><span class="icon-phone"></span>&nbsp;(828) 273-6943</a></p>

	</div>
</div>
