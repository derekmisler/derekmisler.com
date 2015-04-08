<h2>About <?= $profile->first_name; ?></h2>

<hr />

<div class="row">
	<div class="col-md-6">
		<p><?= $profile->biography; ?></p>
		<div class="row social-links">
			<div class="col-md-12">
				<ul class="small-block-grid-3 medium-block-grid-6 large-block-grid-8 text-center">
					<li>
						<a href="<?= $contact->linkedin; ?>" target="_blank">
							<span class="icon-linkedin"></span>
						</a>
					</li>
					<li>
						<a href="<?= $contact->github; ?>" target="_blank">
							<span class="icon-github"></span>
						</a>
					</li>
					<li>
						<a href="<?= $contact->stackoverflow; ?>" target="_blank">
							<span class="icon-stackoverflow"></span>
						</a>
					</li>
					<li>
						<a href="mailto:<?= $contact->email; ?>" target="_blank">
							<span class="icon-mail"></span>
						</a>
					</li>
					<li>
						<a href="<?= $contact->fivehundred; ?>" target="_blank">
							<span class="icon-fivehundred"></span>
						</a>
					</li>
					<li class="visible-xs">
						<a href="tel:<?= $contact->phone; ?>">
							<span class="icon-phone"></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-md-6 text-center">
		<img src="<?= VIEW_PATH; ?>images/loader.gif" data-src="<?= VIEW_PATH; ?>images/derek-misler.jpg" data-src-retina="<?= VIEW_PATH; ?>images/retina/derek-misler.jpg" alt="Derek Misler" width="250" height="250" />
		<p><a href="https://github.com/derekmisler/derekmisler.com" target="_blank"><span class="icon-new-window"></span>&nbsp;View this project on GitHub.</a></p>

	</div>
</div>
