<?php

	namespace Presenters;
	
	/**
	 * Coursework Presenter Class which contains the coursework transfer information.
	 */
	class Coursework extends BaseDTO
	{
		/* CONSTRUCTOR */
		
		public function __construct($poCoursework)
		{
			$this->extend($poCoursework);	
		}
	}