<h2>Experience &amp; Education</h2>
<?php if(count($careers) > 0) { ?>
<hr />
<h3>Career</h3>
<div class="experiences">
	<?php foreach($careers as $index => $career) { ?>
	<div class="experience row">
		<div class="col-md-5 col-lg-4">
			<h4><?= $career->title; ?></h4>
			<p class="experience-period"><?= $career->start_date; ?>-<?= (@isset($career->end_date)) ? $career->end_date : 'current'; ?></p>
		</div>
		<div class="col-md-7 col-lg-8">
			<h5><?= $career->specification; ?></h5>
			<p>
				<span class="hidden-phone">
					<?= $career->description; ?>
				</span>
				<span class="experience-details">
					<span class="location"><span class="icon-location-dot"></span>&nbsp;<?= $career->location; ?></span>
					<?php if(@isset($career->link)) { ?>
					<br />
					<span class="link">
						<a href="<?= $career->link; ?>" target="_blank"><span class="icon-new-window"></span>&nbsp;<?= $career->link; ?></a></span>
					<?php } ?>
				</span>
			</p>
		</div>
	</div>
	<?php } ?>
</div>
<?php } else { ?>
<?php } ?>
<?php if(count($educations) > 0) { ?>
<hr />
<h3>Education</h3>
<div class="experiences">

	<?php foreach($educations as $index => $education) { ?>

	<div class="experience row">
		<div class="col-md-5 col-lg-4">
			<h4><?= $education->title; ?></h4>
			<p class="experience-period">
				<?= $education->start_date; ?>-<?= (@isset($education->end_date)) ? $education->end_date : 'current'; ?>
			</p>
		</div>
		<div class="col-md-7 col-lg-8">
			<h5><?= $education->specification; ?></h5>
			<p>
				<span class="hidden-phone">
					<?= $education->description; ?>
				</span>
				<span class="experience-details">
					<span class="location">
						<span class="icon-location-dot"></span>&nbsp;<?= $education->location; ?>
					</span>
				</span>
			</p>
		</div>
	</div>

	<?php } ?>

</div>

<?php } else { ?>

<?php } ?>
