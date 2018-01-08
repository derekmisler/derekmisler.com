<h2>Qualifications</h2>
<h6 class="text-center">Examples of the skills listed below can be found on <a href="<?= $contact->github; ?>" target="_blank">GitHub.&nbsp;<small class="icon-new-window"></small></a></h6>
<hr />
<?php if(count($skills) > 0) { ?>
<h3 class="hidden-xs hidden-sm">Skills</h3>
<div class="row">
	<div class="col-md-12">
		<ul class="small-block-grid-1 medium-block-grid-2">
		<?php foreach($skills as $index => $skill) { ?>
			<li>
				<span class="ability-title"><?= $skill->title; ?></span>
				<span class="ability-score">
				<?php for($stars = 1; $stars <= 5; $stars++) { ?>
					<span class="icon icon-star <?= ($skill->level >= $stars) ? 'filled' : ''; ?>"></span>
				<?php } ?>
				</span>
			</li>
			<?php if(ceil(count($skills) / 2) == $index + 1) { ?>
			<?php } ?>
		<?php } ?>
		</ul>
	</div>
</div>
<?php } else { ?>
<?php } ?>
<hr class="hidden-xs hidden-sm" />
<h3 class="hidden-xs hidden-sm">Independent Learning</h3>
<?php if(count($coursework) > 0) { ?>
<div class="coursework hidden-xs hidden-sm">
	<div class="coursework row">
		<div class="col-md-12">
			<ul class="small-block-grid-1 medium-block-grid-2">
				<?php foreach($coursework as $index => $courses) { ?>
				<li>
					<span class="course-title"><?= $courses->title; ?></span>
					<h5 class="course-specification"><?= $courses->specification; ?></h5>
				</li>
				<?php } ?>
			</ul>
		</div>
	</div>
</div>
<?php } else { ?>
<?php } ?>
<?php if(count($tools) > 0) { ?>
<hr />
<h3>Tools</h3>
<div class="row">
	<div class="col-md-12">
		<ul class="small-block-grid-1 medium-block-grid-2">
		<?php foreach($tools as $index => $tool) { ?>
			<li>
				<span class="ability-title"><?= $tool->title; ?></span>
				<span class="ability-score">
				<?php for($stars = 1; $stars <= 5; $stars++) { ?>
					<span class="icon icon-star <?= ($tool->level >= $stars) ? 'filled' : ''; ?>"></span>
				<?php } ?>
				</span>
			</li>
			<?php if(ceil(count($tools) / 2) == $index + 1) { ?>
			<?php } ?>
		<?php } ?>
		</ul>
	</div>
</div>
<?php } else { ?>
<?php } ?>
