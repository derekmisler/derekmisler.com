<?php if(count($projects) > 0) { ?>
<h2>Live Projects</h2>
<h6>These are just a few examples of projects that are currently live. For a full portfolio and to view the repositories for these projects and others not included here, check out <a href="<?= $contact->github; ?>" target="_blank">GitHub</a> for projects like: 
<?php
	$rss = new DOMDocument();
	$rss->load('http://derekmisler.github.io/feed.xml');
	$feed = array();
	foreach ($rss->getElementsByTagName('item') as $node) {
		$item = array ( 
			'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
			'link' => $node->getElementsByTagName('link')->item(0)->nodeValue
			);
		array_push($feed, $item);
	}
	$limit = 4;
	for($x=0; $x < $limit; $x++) {
		$title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
		$link = $feed[$x]['link'];
		echo '<em><a href="'.$link.'" title="'.$title.'" target="_blank">'.$title.'</a></em>, ';
	}
	echo '<em><a href="'.$feed[$limit]['link'].'" title="'.$feed[$limit]['title'].'" target="_blank">'.$feed[$limit]['title'].'&nbsp;<small class="icon-new-window"></small></a></em>.';
?>
</h6>
<hr />
<div class="row">
	<?php foreach($projects as $index => $project) { ?>
	<div class="col-xs-12 col-sm-6">
		<figure class="effect">
			<img src="<?= IMAGES_PATH; ?>loader.gif" data-src="<?= IMAGES_PATH.$project->image; ?>" data-src-retina="<?= IMAGES_PATH.'retina/'.$project->image; ?>" alt="<?= $project->title; ?> by <?= $profile->full_name; ?>" />
			<noscript>
				<img src="<?= IMAGES_PATH.$project->image; ?>" alt="<?= $project->title; ?> by <?= $profile->full_name; ?>" />
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
