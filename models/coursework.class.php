<?php

	namespace Models;
	
	/* LOAD DEPENDECIES */
	require_once('presenters/coursework.class.php');
	
	/**
	 * Coursework Class which contains the coursework information.
	 */
	class Coursework extends BaseModel
	{
		/* CONSTRUCTOR */
		
		public function __construct($poCoursework)
		{
			$this->extend($poCoursework);	
		}
		
		/* PUBLIC METHODS */
		
		public function get()
		{
			return new \Presenters\Coursework($this);
		}
	}