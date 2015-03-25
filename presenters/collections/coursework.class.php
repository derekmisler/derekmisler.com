<?php

	namespace Presenters\Collections;
	
	use \Libraries\ORM as ORM;

	/* LOAD DEPENDECIES */
	require_once('models/coursework.class.php');
	
	/**
	 * Coursework Collection Class which contains the coursework information.
	 */
	class Coursework
	{
		private $iaCoursework = array();
		
		/* CONSTRUCTOR */
		
		public function __construct()
		{
			$this->collect();
		}
		
		/* PUBLIC METHODS */
		
		public function all()
		{			
			return $this->iaCoursework;
		}
		
		public function sortByDate()
		{
			// TO DO
		}
		
		/* PRIVATE METHODS */
		
		private function collect()
		{
			$laCoursework = ORM::factory('coursework');
			
			foreach($laCoursework as $loCourses)
			{
				$loCourses = new \Models\Coursework($loCourses);
				
				$this->iaCoursework[] = $loCourses->get();
			}
		}
	}