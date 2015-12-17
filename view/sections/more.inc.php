<h2>Learn More About <?= $profile->full_name; ?></h2>
<hr />

<div class="row">
	<div class="col-md-12">
		<ul class="small-block-grid-1 medium-block-grid-2 text-center">
			<li>
				<a title="Email <?= $profile->full_name; ?>" href="mailto:<?= $contact->email; ?>" target="_blank"><span class="icon-mail"></span>&nbsp;derekmisler@gmail.com</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s StackOverflow profile" href="<?= $contact->stackoverflow; ?>" target="_blank"><span class="icon-stackoverflow"></span>&nbsp;StackOverflow</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s LinkedIn profile" href="<?= $contact->linkedin; ?>" target="_blank"><span class="icon-linkedin"></span>&nbsp;LinkedIn</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s GitHub profile" href="<?= $contact->github; ?>" target="_blank"><span class="icon-github"></span>&nbsp;GitHub</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s Flickr profile" href="<?= $contact->flickr; ?>" target="_blank"><span class="icon-flickr"></span>&nbsp;Flickr</a>
			</li>
			<li>
				<a title="View <?= $profile->full_name; ?>'s Twitter" href="<?= $contact->twitter; ?>" target="_blank"><span class="icon-twitter"></span>&nbsp;Twitter</a>
			</li>
		</ul>
	</div>
</div>