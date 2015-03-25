<h2>Learn More About <?= $profile->first_name; ?></h2>
<hr />

<div class="row">
	<div class="col-md-12">
		<ul class="small-block-grid-2 medium-block-grid-5 text-center">
			<li>
				<a href="mailto:<?= $contact->email; ?>" target="_blank">
					<span class="icon-mail"></span>
				</a>
			</li>
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
				<a href="<?= $contact->fivehundred; ?>" target="_blank">
					<span class="icon-fivehundred"></span>
				</a>
			</li>
			<li>
				<a href="<?= $contact->stackoverflow; ?>" target="_blank">
					<span class="icon-stackoverflow"></span>
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