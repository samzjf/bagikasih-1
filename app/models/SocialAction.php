<?php

class SocialAction extends BaseModel {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'social_actions';

	public function socialTarget()
	{
		return $this->belongsTo('SocialTarget', 'social_target_id');
	}

	public function category()
	{
		return $this->belongsTo('SocialActionCategory', 'social_action_category_id');
	}

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function city()
	{
		return $this->belongsTo('City');
	}

	public function defaultPhoto()
	{
		return $this->belongsTo('Photo', 'default_photo_id');
	}

	public function coverPhoto()
	{
		return $this->belongsTo('Photo', 'cover_photo_id');
	}
}