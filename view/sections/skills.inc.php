<h2><?= $profile->full_name; ?>'s Qualifications</h2>

<hr />

<h3>Independent Coursework</h3>

<?php if(count($coursework) > 0) { ?>

<div class="coursework">

				
	<div class="coursework row">

		<div class="col-md-12">
			<ul class="small-block-grid-1 medium-block-grid-2">

			<?php foreach($coursework as $index => $courses) { ?>

				<li>
					<span class="course-title"><?= $courses->title; ?></span>
					<h4 class="course-specification"><?= $courses->specification; ?></h4>
				</li>

			<?php } ?>

			</ul>
		</div>
	</div>


</div>
	
<?php } else { ?>
	
	
<?php } ?>

<hr />

<h3>Proficiencies</h3>

<div class="row">

	<?php if(count($skills) > 0) { ?>
	
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
	
	<?php } else { ?>
	

	<?php } ?>
	
</div>
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
	
	<?php } else { ?>
	

	<?php } ?>
	
</div>