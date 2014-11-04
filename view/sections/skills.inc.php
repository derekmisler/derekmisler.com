<h2>Qualifications</h2>

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