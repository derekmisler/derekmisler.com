<h2>About <?= $profile->first_name; ?></h2>

<hr />

<div class="row">
	<div class="col-md-6">
		<p><?= $profile->biography; ?></p>
	</div>
	<div class="col-md-6 text-center">
		<img src="<?= VIEW_PATH; ?>images/derek-misler.jpg" alt="Derek Misler" width="250" height="250" />
		<p>
			<?= $profile->current_location->city; ?>, <?= $profile->current_location->state; ?><br />
			<a href="mailto:<?= $contact->email; ?>" target="_blank"><?= $contact->email; ?></a><br />
			<a href="tel:<?= $contact->phone; ?>"><?= $contact->phonedisplay; ?></a>
		</p>
		
	</div>
</div>