<h2>About <?= $profile->first_name; ?></h2>

<hr />

<div class="row">
	<div class="col-md-6">
		<p><?= $profile->biography; ?></p>
	</div>
	<div class="col-md-6 text-center">
		<img src="<?= VIEW_PATH; ?>images/loader.gif" data-src="<?= VIEW_PATH; ?>images/derek-misler-1x.jpg" data-src-retina="<?= VIEW_PATH; ?>images/derek-misler.jpg" alt="Derek Misler" width="250" height="250" />
		<p>
			<a href="mailto:<?= $contact->email; ?>" target="_blank"><span class="icon-mail"></span>&nbsp;<?= $contact->email; ?></a><br />
			<a href="tel:<?= $contact->phone; ?>"><span class="icon-phone"></span>&nbsp;<?= $contact->phonedisplay; ?></a><br />
			<a href="<?= VIEW_PATH; ?>images/Derek-Misler-resume.pdf" target="_blank"><span class="icon-new-window"></span>&nbsp;Resume</a>
		</p>
		
	</div>
</div>