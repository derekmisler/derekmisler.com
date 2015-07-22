<?php if(count($projects) > 0) { ?>
<h2><?= $profile->full_name; ?>'s Portfolio</h2>
<hr />
<div class="row">
	<?php foreach($projects as $index => $project) { ?>
	<div class="col-sm-6 col-xs-12">
		<figure class="effect">
			<img src="<?= VIEW_PATH; ?>images/loader.gif" data-src="<?= VIEW_PATH.'images/'.$project->image; ?>" data-src-retina="<?= VIEW_PATH.'images/retina/'.$project->image; ?>" alt="<?= $project->title; ?> by <?= $profile->full_name; ?>" />
			<noscript>
				<img src="<?= VIEW_PATH.'images/'.$project->image; ?>" alt="<?= $project->title; ?> by <?= $profile->full_name; ?>" />
			</noscript>
			<figcaption>
				<h3><?= $project->title; ?></h3>
				<p><?= $project->description; ?></p>
				<p><strong>Skills Utilized:</strong> <br /><?= $project->tags; ?></p>
				<a href="<?= $project->link; ?>" target="_blank" title="View <?= $project->title; ?> by <?= $profile->full_name; ?>">View more</a>
				<span class="icon">
					<span class="icon-new-window"></span>
				</span>
			</figcaption>
		</figure>
	</div>
	<?php } ?>
</div>
<?php } else { ?>
<?php } ?>
