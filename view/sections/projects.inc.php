<?php if(count($projects) > 0) { ?>
<h2><?= $profile->full_name; ?>'s Favorite Projects</h2>
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
<?php
#
# build the Flickr API URL to call
#
$params = array(
	'api_key'	=> '910bf81d37f10472b9efc377fee384a3',
	'method'	=> 'flickr.photos.getInfo',
	'photo_id'	=> '18892668955',
	'format'	=> 'php_serial',
);
$encoded_params = array();
foreach ($params as $k => $v){
	$encoded_params[] = urlencode($k).'='.urlencode($v);
}

#
# call the API and decode the response
#
$url = "https://api.flickr.com/services/rest/?".implode('&', $encoded_params);
$rsp = file_get_contents($url);
$rsp_obj = unserialize($rsp);

#
# display the photo title (or an error if it failed)
#
if ($rsp_obj['stat'] == 'ok'){
	$photo_title = $rsp_obj['photo']['title']['_content'];
	#echo "Title is $photo_title!";
}else{
	#echo "Call failed!";
}
?>
<!-- <hr />
<h3>Flickr Photostream</h3>
<div class="row">
	<div class="col-sm-6 col-xs-12">
		<figure class="effect">
			<img src="images/loader.gif" />
			<figcaption>
				<h3></h3>
				<span class="icon">
					<span class="icon-new-window"></span>
				</span>
			</figcaption>
		</figure>
	</div>
</div> -->
