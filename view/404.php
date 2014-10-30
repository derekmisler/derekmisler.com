<!doctype html>
<html lang="en-us" itemscope itemtype="http://schema.org/Article">
	<?php include(VIEW_INCLUDE_PATH.'sections/meta.inc.php'); ?>
	<body data-spy="scroll" data-target=".navbar-collapse">

		<div id="top" class="jumbotron" data-src="<?= $current_header['source']; ?>" data-position="<?= $current_header['position']; ?>">
			<div class="container">
				<h1>404: Page Not Found<small><a href="../">Return Home</a></small></h1>
			</div>
			<div class="overlay"></div>
		</div>
		
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="<?= VIEW_PATH; ?>js/script.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	</body>
</html>