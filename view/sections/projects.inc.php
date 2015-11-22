<?php if(count($projects) > 0) { ?>
<h2>Live Projects</h2>
<h6 class="text-center">These are just a few examples of live projects. For a full portfolio and to view the repositories for these projects and others not included here, check out <a href="<?= $contact->github; ?>" target="_blank">GitHub.&nbsp;<small class="icon-new-window"></small></a></h6>
<hr />
<div class="row">
	<?php foreach($projects as $index => $project) { ?>
	<div class="col-xs-12 col-sm-6">
		<figure class="effect">
			<img src="<?= VIEW_PATH; ?>images/loader.gif" data-src="<?= VIEW_PATH.'images/'.$project->image; ?>" data-src-retina="<?= VIEW_PATH.'images/retina/'.$project->image; ?>" alt="<?= $project->title; ?> by <?= $profile->full_name; ?>" />
			<noscript>
				<img src="<?= VIEW_PATH.'images/'.$project->image; ?>" alt="<?= $project->title; ?> by <?= $profile->full_name; ?>" />
			</noscript>
			<figcaption>
				<h3><?= $project->title; ?></h3>
				<p><?= $project->description; ?></p>
				<p><strong>Skills Utilized:</strong> <br /><?= $project->tags; ?></p>
				<a href="<?= $project->link; ?>" <?php if(strpos($project->link,'.jpg') !== false) { ?>  data-featherlight="image" <?php } else { ?>target="_blank" <?php } ?> title="View <?= $project->title; ?> by <?= $profile->full_name; ?>">View more</a>
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
